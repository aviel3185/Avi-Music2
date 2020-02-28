import { AuthService } from './auth.service';
import { Controller, Get, Response, Param } from '@nestjs/common';

@Controller('/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Get('/getMe')
    getMe(@Response() res) {
        res.json(this.authService.getMe());
        // return this.authService.getMe();
    }

    @Get('song/:title')
    getSong(@Param() param){
        return param;
    }
}
