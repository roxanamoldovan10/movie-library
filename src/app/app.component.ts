import { Component, OnInit } from '@angular/core';
import { AutentificationService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private welcome: string = 'Welcome';

  constructor(
    private authenticationService: AutentificationService
  ) {}


  ngOnInit() {} 
}
