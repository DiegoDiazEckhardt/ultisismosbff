import { Test, TestingModule } from '@nestjs/testing';
import { SismosService } from './sismos.service';

describe('SismosService', () => {
  let service: SismosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SismosService],
    }).compile();

    service = module.get<SismosService>(SismosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
