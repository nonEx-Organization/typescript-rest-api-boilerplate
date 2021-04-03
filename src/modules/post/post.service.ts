import { Injectable, InternalServerErrorException } from '@nestjs/common';

import Post from './post.entity';
import PostRepository from './post.repository';


@Injectable()
export default class PostService {
  constructor(
    private readonly postRepository: PostRepository,
  ) {}

  public async create(text: string, authorId: string): Promise<Post> {
    try {
      const item = this.postRepository.create({ text, authorId });
      await item.save();

      return item;
    } catch (err) {
      console.log('error', err);
      throw new InternalServerErrorException('Something went wrong! Contact to admin.');
    }
  }
}
