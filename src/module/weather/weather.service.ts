import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { WEATHER_MODEL } from '../database/const';
import { Weather } from '../database/interfaces/weather.interface';
import { CreateOrUpdateWeatherDto } from './dto/create-or-update-weather.dto';

@Injectable()
export class WeatherService {
    constructor(@Inject(WEATHER_MODEL) private weatherModel: Model<Weather>) {

    }
    async findAll() {
        return this.weatherModel.find().exec();
    }

    async createOrUpdate(createOrUpdateWeatherDto: CreateOrUpdateWeatherDto): Promise<Weather>{
        const createdWeather = new this.weatherModel(createOrUpdateWeatherDto);

        return createdWeather.save();
    }
}
