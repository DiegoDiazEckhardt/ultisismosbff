import { Test, TestingModule } from '@nestjs/testing';
import { SismosController } from './sismos.controller';

describe('SismosController', () => {
  let controller: SismosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SismosController],
    }).compile();

    controller = module.get<SismosController>(SismosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
