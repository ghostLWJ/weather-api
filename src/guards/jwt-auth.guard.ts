import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WEATHER_JWT } from 'src/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(WEATHER_JWT) {
}