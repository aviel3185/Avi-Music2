import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getMe(): object {
        return { username: 't_aviel_e', isAdmin: true };
    }
}
