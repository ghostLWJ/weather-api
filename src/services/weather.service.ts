import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { WEATHER_MODEL } from '../database/const';
import { Weather } from '../database/interfaces/weather.interface';
import { CreateOrUpdateWeatherDto } from '../dto/create-or-update-weather.dto';
import WeatherSpecification from 'src/specs/weather-specification';

@Injectable()
export class WeatherService {
    constructor(@Inject(WEATHER_MODEL) private weatherModel: Model<Weather>) {

    }
    async findAll(city: string) {
        const spec = new WeatherSpecification();

        spec.city = city;

        return this.weatherModel.find(spec.GetPredicate().getCondition()).exec();
        
        // TODO: maybe cache result(with expire) for next time query same condition
    }

    async createOrUpdate(createOrUpdateWeatherDto: CreateOrUpdateWeatherDto): Promise<Weather> {
        const weatherOperPromise = this.weatherModel.findOneAndUpdate({ citySn: createOrUpdateWeatherDto.citySn, townSn: createOrUpdateWeatherDto.townSn }, createOrUpdateWeatherDto, { upsert: true });

        return weatherOperPromise;
    }
}
