import {DashboardComponent} from './dashboard.component';
   
   describe('DashboardComponent', () => {
    beforeEach(function() {
      this.dash = new DashboardComponent();
    });
    var expect = require('chai').expect;

    it('role should be string ', function() {
        expect(this.dash.role).to.be.a('string');
    });
    it('role should be string ', function() {
      expect(this.dash.role).to.be.a('string');
    });

    it('role should be null', function() {
      this.dash.ngOnInit();
      expect(this.dash.role).to.be.null;
    });
   });