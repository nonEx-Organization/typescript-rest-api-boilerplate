import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';

import PostController from './post.controller';
import PostService from './post.service';
import PostRepository from './post.repository';
import AuthGuard from '../authentication/guards/authentication.guard';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostRepository]),
  ],
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export default class PostModule {}
