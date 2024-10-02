import { Controller, Get } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller()
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  getHello(): string {
    return this.tenantService.getHello();
  }
}
