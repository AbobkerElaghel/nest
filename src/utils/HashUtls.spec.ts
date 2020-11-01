import { Test, TestingModule } from '@nestjs/testing';
import HashUtls from './HashUtls';

describe('HashUtls', () => {


  describe('root', () => {
    it('should generate a salt', () => {
      return HashUtls.createSalt();
    });
  });
});