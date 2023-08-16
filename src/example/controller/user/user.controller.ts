import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// PRISMA
import { UserService } from '../../service/user/user.service';
import { User as UserModel } from '@prisma/client';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
