import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import PostModule from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: process.env.MONGO_ROOT_USERNAME,
      password: process.env.MONGO_ROOT_PWD,
      database: 'boilerplate',
      entities: ['dist/modules/**/*entity.js'],
      synchronize: true,
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export default class AppModule {}
