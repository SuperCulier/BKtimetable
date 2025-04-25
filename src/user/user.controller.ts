import { Controller, Get, } from '@nestjs/common';
//import { UserService } from './user.service';

@Controller('user') // API base path: /user
export class UserController {
    @Get()
    getUser() {
      return { message: 'Here is the User data' };

    }   
}




