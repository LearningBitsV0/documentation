import { NestFactory } from '@nestjs/core';
import { DocumentsModule } from './documents.module';

async function bootstrap() {
  console.log("hello documents")
  const app = await NestFactory.create(DocumentsModule);
  await app.listen(3000);
}
bootstrap();
