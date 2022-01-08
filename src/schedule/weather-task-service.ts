import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import got from 'got';

import { weather as weatherConfig } from "package.json";
import { WEATHER_EXTRACT_FAILED, WEATHER_TASK_SERVICE } from "src/constants";

import * as fs from 'fs'
import { WeatherResponseObject } from "src/response";
import { CreateOrUpdateWeatherDto } from "src/dto/create-or-update-weather.dto";
import { createOrUpdateWeatherSchema } from "src/schema/create-or-update-weather.schema";
import { WeatherService } from "src/services/weather.service";

@Injectable()
export class WeatherTaskService {
    constructor(private weatherService: WeatherService) { }

    
    @Cron('0 0-23/1 * * *', {
        name: WEATHER_TASK_SERVICE
    })
    async fetchWeather() {
        const { key: weatherAPIKey, citys: onlyCareTheseCity } = weatherConfig;

        if (!weatherAPIKey || typeof weatherAPIKey !== 'string' || !weatherAPIKey.length) throw new Error('Not found weather api key. \nPlease set api key in package.json. \nHow to get api key(https://opendata.cwb.gov.tw/dataset/observation/O-A0003-001).\n');

        try {
            const resp = await got(this.apiWithAuthorizationQueryString())

            const weatherResponse = JSON.parse(resp.body) as WeatherResponseObject;

            if (weatherResponse.success.toLowerCase() !== String(true)) throw new Error(`Get weather data failed.`);

            const locations = weatherResponse.records?.location.filter(location => location.parameter.some(p => onlyCareTheseCity.includes(p.parameterValue))) ?? [];

            if (!locations.length) throw new Error('WARNING: Not get any weather data.');

            const createOrUpdateWeatherDtos = locations.map(location => CreateOrUpdateWeatherDto.fromWeatherAPIResponseLocation(location)).filter(dto => !this.createOrUpdateWeatherDtoIsIllegal(dto));

            const promises = [];

            for (const dto of createOrUpdateWeatherDtos) { promises.push(this.weatherService.createOrUpdate(dto)); }

            await Promise.all(promises);

            //TODO: maybe clean cache and set new cache
        } catch (e) {
            console.error(e);

            //TODO: maybe send notification
        }
    }

    private apiWithAuthorizationQueryString(url = weatherConfig.api): string {
        return `${url}?Authorization=${weatherConfig.key}`;
    }

    private createOrUpdateWeatherDtoIsIllegal(dto: CreateOrUpdateWeatherDto): boolean {
        return dto.citySn === WEATHER_EXTRACT_FAILED || dto.townSn === WEATHER_EXTRACT_FAILED;
    }
}