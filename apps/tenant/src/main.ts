import { NestFactory } from '@nestjs/core';
import { TenantModule } from './tenant.module';

async function bootstrap() {
  const app = await NestFactory.create(TenantModule);
  await app.listen(3000);
}
bootstrap();
