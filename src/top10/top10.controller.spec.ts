import { Test, TestingModule } from '@nestjs/testing';
import { Top10Controller } from './top10.controller';
import { Top10Service } from './top10.service';

describe('Top10Controller', () => {
  let controller: Top10Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Top10Controller],
      providers: [Top10Service],
    }).compile();

    controller = module.get<Top10Controller>(Top10Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});