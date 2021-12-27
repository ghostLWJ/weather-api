import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { WeatherModule } from './module/weather/weather.module';

@Module({
  imports: [WeatherModule, AuthModule],
})
export class AppModule {}
