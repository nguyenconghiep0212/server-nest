import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Get,
  Headers
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto, ListUserDto, DeleteUserDto } from '../../dto/user/user.dto';

// PRISMA
import { UserService } from '../../service/user/user.service';
import { User as UserModel } from '@prisma/client';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/create')
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Post('/list')
  async listUser(@Body() params: ListUserDto): Promise<UserModel[]> {
    return this.userService.list(params);
  }

  @Post('/update')
  async updateUser(@Body() params: UpdateUserDto): Promise<UserModel> {
    const request = { where: { id: params.id }, data: params.data }
    return this.userService.updateUser(request);
  }

  @Delete('/delete/:id')
  async deleteUser(@Body() params: DeleteUserDto): Promise<UserModel> {
    const request = { id: params.id }
    return this.userService.deleteUser(request);
  }
}
