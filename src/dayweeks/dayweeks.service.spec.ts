import { Test, TestingModule } from '@nestjs/testing';
import { DayweeksService } from './dayweeks.service';

describe('DayweeksService', () => {
  let service: DayweeksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayweeksService],
    }).compile();

    service = module.get<DayweeksService>(DayweeksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
