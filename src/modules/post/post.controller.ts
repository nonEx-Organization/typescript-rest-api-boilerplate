import {
  Controller,
  Post,
  Body,
  Req,
} from '@nestjs/common';

import PostService from './post.service';
import PostEntity from './post.entity';

import PostCreateRequestDTO from './dto/request/post-create.request-dto';


@Controller('/posts')
export default class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @Post()
  async create(@Req() req, @Body() body: PostCreateRequestDTO): Promise<PostEntity> {
    const post: PostEntity = await this.postService.create(
      body.text,
      req.user.id.toString(),
    );

    return post;
  }
}
