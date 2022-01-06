import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DO_NOT_DO_THAT_IN_PROD, WEATHER_JWT } from 'src/constants';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, WEATHER_JWT) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: DO_NOT_DO_THAT_IN_PROD,
          });
    }

    async validate(payload: any): Promise<any> {
        const { ip } = payload;

        const pass = await this.authService.validateRequest(ip);

        return pass;
      }

}