import { Test, TestingModule } from '@nestjs/testing';
import { BloodtypesService } from './bloodtypes.service';

describe('BloodtypesService', () => {
  let service: BloodtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodtypesService],
    }).compile();

    service = module.get<BloodtypesService>(BloodtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
