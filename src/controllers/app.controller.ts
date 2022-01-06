import { Body, Controller, Get, Ip, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateOrUpdateWeatherDto } from '../dto/create-or-update-weather.dto';
import { WeatherService } from '../services/weather.service';
import { JoiValidationPipe } from '../pipe/joi-validation.pipe';
import { createOrUpdateWeatherSchema } from '../schema/create-or-update-weather.schema';
import { searchWeatherSchema } from 'src/schema/search-weather.schema';
import { FirstCharUppercasePipe } from 'src/pipe/first-char-uppercase.pipe';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(
        private authService: AuthService,
        private weatherService: WeatherService
    ) { }

    @ApiBearerAuth()
    @Get('weather/search/:city')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new JoiValidationPipe(searchWeatherSchema))
    async search(@Param('city', new FirstCharUppercasePipe()) city: string): Promise<any> {
        return this.weatherService.findAll(city);
    }

    @Post('weather/create')
    @UsePipes(new JoiValidationPipe(createOrUpdateWeatherSchema))
    async create(@Body() createOrUpdateWeatherDto: CreateOrUpdateWeatherDto): Promise<any> {
        this.weatherService.createOrUpdate(createOrUpdateWeatherDto)
    }

    @Post('token/generate')
    async login(@Ip() ip): Promise<any> {
        return this.authService.generateTemporaryPassport(ip);
    }
}
