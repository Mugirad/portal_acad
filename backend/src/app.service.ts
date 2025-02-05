import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  GoogleLogin(req) {
    if(!req.user){
      return 'No user from google';
    }
    return {
      message: 'User information from google',
      user:req.user
    }
  }
}
