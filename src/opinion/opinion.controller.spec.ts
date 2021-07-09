import { Test, TestingModule } from '@nestjs/testing';
import { OpinionController } from './opinion.controller';

describe('OpinionController', () => {
  let controller: OpinionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpinionController],
    }).compile();

    controller = module.get<OpinionController>(OpinionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
