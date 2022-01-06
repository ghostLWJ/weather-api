import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { DO_NOT_DO_THAT_IN_PROD } from './constants';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { weatherProviders } from './database/providers/weather.providers';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: DO_NOT_DO_THAT_IN_PROD,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [
    WeatherService,
    AuthService,
    JwtStrategy,
    ...weatherProviders
  ],
})
export class AppModule { }
