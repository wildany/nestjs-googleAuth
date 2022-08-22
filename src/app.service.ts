import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User info from google',
      user: req.user,
    };
  }
}
