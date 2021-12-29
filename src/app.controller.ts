import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './module/auth/auth.service';
import { WeatherService } from './module/weather/weather.service';

@Controller()
export class AppController {
    constructor(
        private authService: AuthService,
        private weatherService: WeatherService
    ) { }

    @Get('weather/search')
    async search(): Promise<any> {
        
    }

    @Post('token/generate')
    async login(): Promise<any> {

    }
}
