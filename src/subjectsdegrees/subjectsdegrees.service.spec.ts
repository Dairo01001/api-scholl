import { Test, TestingModule } from '@nestjs/testing';
import { SubjectsdegreesService } from './subjectsdegrees.service';

describe('SubjectsdegreesService', () => {
  let service: SubjectsdegreesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectsdegreesService],
    }).compile();

    service = module.get<SubjectsdegreesService>(SubjectsdegreesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
