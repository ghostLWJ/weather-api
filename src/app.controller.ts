import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './module/auth/auth.service';
import { CreateOrUpdateWeatherDto } from './module/weather/dto/create-or-update-weather.dto';
import { WeatherService } from './module/weather/weather.service';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';
import { createOrUpdateWeatherSchema } from './schema/create-or-update-weather.schema';

@Controller()
export class AppController {
    constructor(
        private authService: AuthService,
        private weatherService: WeatherService
    ) { }

    @Get('weather/search')
    async search(): Promise<any> {
        return this.weatherService.findAll();
    }

    @Post('weather/create')
    @UsePipes(new JoiValidationPipe(createOrUpdateWeatherSchema))
    async create(@Body() createOrUpdateWeatherDto: CreateOrUpdateWeatherDto): Promise<any> {
        this.weatherService.createOrUpdate(createOrUpdateWeatherDto)
    }

    @Post('token/generate')
    async login(): Promise<any> {
        return this.authService.generateTemporaryPassport();
    }
}
