import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './module/auth/auth.module';
import { WeatherModule } from './module/weather/weather.module';

@Module({
  controllers: [AppController],
  imports: [WeatherModule, AuthModule],
})
export class AppModule {}
