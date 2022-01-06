import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { weatherProviders } from './database/providers/weather.providers';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';

@Module({
  controllers: [AppController],
  imports: [DatabaseModule],
  providers: [
    WeatherService,
    AuthService,
    ...weatherProviders
  ],
})
export class AppModule { }
