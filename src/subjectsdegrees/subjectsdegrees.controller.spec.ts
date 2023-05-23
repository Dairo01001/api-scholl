import { Test, TestingModule } from '@nestjs/testing';
import { SubjectsdegreesController } from './subjectsdegrees.controller';
import { SubjectsdegreesService } from './subjectsdegrees.service';

describe('SubjectsdegreesController', () => {
  let controller: SubjectsdegreesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectsdegreesController],
      providers: [SubjectsdegreesService],
    }).compile();

    controller = module.get<SubjectsdegreesController>(SubjectsdegreesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
