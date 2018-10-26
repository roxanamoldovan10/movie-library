import {RollCallService} from './roll-call.service';
   
   describe('RollCallService', () => {
    beforeEach(function() {
      this.roll = new RollCallService();
    });
    var expect = require('chai').expect;
    var chai = require('chai');

    it('code should be a string', function() {
      expect(this.roll.code).to.be.a('string');
  });
   });