import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './module/auth/auth.module';
import { DatabaseModule } from './module/database/database.module';
import { WeatherModule } from './module/weather/weather.module';

@Module({
  controllers: [AppController],
  imports: [WeatherModule, AuthModule, DatabaseModule],
})
export class AppModule {}
