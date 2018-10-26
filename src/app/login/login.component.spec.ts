import {LoginComponent} from './login.component';
   
   describe('LoginComponent', () => {
    beforeEach(function() {
      this.login = new LoginComponent();
    });
    var expect = require('chai').expect;
    var assert = require('chai').assert;
   
    it('loading should be false', function() {
      expect(this.login.loading).to.be.false;
    });

    it('authentificated should be false', function() {
        expect(this.login.isAuthenticated).to.be.false;
        assert.isNotOk(false, 'this will fail');
      });

      it('authentificated should be defined but should fail', function() {
        assert.isNotOk(this.login.isAuthenticated, 'this will fail');
      });
   });