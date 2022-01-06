import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {

    }

    async validateRequest(): Promise<any> { }

    async generateTemporaryPassport(ip: string): Promise<any> {
        const payload = { ip };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}