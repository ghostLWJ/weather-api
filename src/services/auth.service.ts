import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as net from 'net'

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {

    }

    async validateRequest(ip: string): Promise<any> { 
        const isIpResult = net.isIP(ip);

        return [4, 6].includes(isIpResult);
    }

    async generateTemporaryPassport(ip: string): Promise<any> {
        const payload = { ip };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}