import { Test, TestingModule } from '@nestjs/testing';
import { TimeblocksService } from './timeblocks.service';

describe('TimeblocksService', () => {
  let service: TimeblocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeblocksService],
    }).compile();

    service = module.get<TimeblocksService>(TimeblocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
