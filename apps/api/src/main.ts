import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // middleware
  app.enableCors();
  app.useLogger(app.get(Logger));

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
