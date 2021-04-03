import {
  Entity,
  ObjectIdColumn,
  Column,
  BaseEntity,
  ObjectID,
} from 'typeorm';

@Entity('posts')
export default class Post extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  text: string;

  @Column()
  authorId: string;
}
