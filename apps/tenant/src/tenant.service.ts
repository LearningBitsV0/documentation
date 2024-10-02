import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService {
  getHello(): string {
    return 'Hello World!';
  }
}
