import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { ApplicationBootstrap } from './application-bootstrap';
import { DO_NOT_DO_THAT_IN_PROD } from './constants';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { weatherProviders } from './database/providers/weather.providers';
import { WeatherTaskService } from './schedule/weather-task-service';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    ScheduleModule.forRoot(),
    JwtModule.register({
      secret: DO_NOT_DO_THAT_IN_PROD,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [
    ApplicationBootstrap,
    WeatherTaskService,
    WeatherService,
    AuthService,
    JwtStrategy,
    ...weatherProviders
  ],
})
export class AppModule { }
