import { Test, TestingModule } from '@nestjs/testing';
import { UserssController } from './userss.controller';

describe('UserssController', () => {
  let controller: UserssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserssController],
    }).compile();

    controller = module.get<UserssController>(UserssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
