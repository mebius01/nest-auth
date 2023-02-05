import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from '../app.controller';

describe('AppController', () => {
  let pingController: PingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [],
    }).compile();

    pingController = app.get<PingController>(PingController);
  });

  describe('Ping', () => {
    it('Return version app', () => {
      expect(pingController.get()).toEqual({
        version: process.env.npm_package_version,
      });
    });
  });
});
