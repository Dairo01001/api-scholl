import { Test, TestingModule } from '@nestjs/testing';
import { DayweeksController } from './dayweeks.controller';
import { DayweeksService } from './dayweeks.service';

describe('DayweeksController', () => {
  let controller: DayweeksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayweeksController],
      providers: [DayweeksService],
    }).compile();

    controller = module.get<DayweeksController>(DayweeksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
