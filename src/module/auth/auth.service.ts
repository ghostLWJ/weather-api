import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    async validateRequest(): Promise<any> {}

    async generateTemporaryPassport(): Promise<any> {}
}