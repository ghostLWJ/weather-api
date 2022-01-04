import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { weatherProviders } from '../database/weather.providers';
import { WeatherService } from './weather.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        WeatherService,
        ...weatherProviders
    ],
    exports: [WeatherService]
})
export class WeatherModule { }
