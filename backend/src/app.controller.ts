import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from '@nestjs/passport';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async GoogleAuth(@Req() req) {
  }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async GoogleAuthRedirect(@Req() req) {
    return this.appService.GoogleLogin(req);
  }
}
