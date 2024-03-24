import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { consoleTransports } from './common/middleware/winston_log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
