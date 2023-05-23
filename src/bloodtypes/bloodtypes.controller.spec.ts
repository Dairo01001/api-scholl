import { Test, TestingModule } from '@nestjs/testing';
import { BloodtypesController } from './bloodtypes.controller';
import { BloodtypesService } from './bloodtypes.service';

describe('BloodtypesController', () => {
  let controller: BloodtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodtypesController],
      providers: [BloodtypesService],
    }).compile();

    controller = module.get<BloodtypesController>(BloodtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
