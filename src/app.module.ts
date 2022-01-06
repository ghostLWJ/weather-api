import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { weatherProviders } from './database/providers/weather.providers';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: "This is magic secret string. Do not do that in prod",
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [
    WeatherService,
    AuthService,
    ...weatherProviders
  ],
})
export class AppModule { }
