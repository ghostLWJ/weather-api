import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { WeatherTaskService } from './schedule/weather-task-service';

@Injectable()
export class ApplicationBootstrap implements OnApplicationBootstrap {
    constructor(private weatherTaskService: WeatherTaskService) {

    }

    onApplicationBootstrap() {
        console.info('onApplicationBootstrap fetchWeather');
        this.weatherTaskService.fetchWeather();
    }
}