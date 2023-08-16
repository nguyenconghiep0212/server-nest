import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import { UserController } from './controller/user/user.controller';
import { PostController } from './controller/post/post.controller';
import { UserService } from './service/user/user.service';
import { PostService } from './service/post/post.service';
@Module({
  imports: [],
  controllers: [UserController, PostController],
  providers: [UserService, PostService, PrismaService],
})
export class MainModule {}
