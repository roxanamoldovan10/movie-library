describe('Sample Test', () => {
  it('test works', () => expect(true).toBe(true));
 });
 
 import {AppComponent} from './app.component';
 
 describe('AppComponent', () => {
  beforeEach(function() {
    this.app = new AppComponent();
  });
 
  it('should have welcome property', function() {
    expect(this.app.welcome).toBe('Welcome');
  });
 });