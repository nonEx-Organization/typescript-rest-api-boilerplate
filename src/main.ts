import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import AppModule from './modules/app.module';
import AuthGuard from './modules/authentication/guards/authentication.guard';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());

  await app.listen(5000);
}
bootstrap();
