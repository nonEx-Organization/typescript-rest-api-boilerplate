import {
  EntityRepository, Repository,
} from 'typeorm';

import Post from './post.entity';

@EntityRepository(Post)
export default class PostRepository extends Repository<Post> {}
