import { Test, TestingModule } from '@nestjs/testing';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';

describe('TenantController', () => {
  let tenantController: TenantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TenantController],
      providers: [TenantService],
    }).compile();

    tenantController = app.get<TenantController>(TenantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tenantController.getHello()).toBe('Hello World!');
    });
  });
});
