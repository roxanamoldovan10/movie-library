import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AutentificationServiceService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isAuthenticated:boolean;

  constructor(
    private router: Router,
    private authenticationService: AutentificationServiceService,
    private alertService: AlertService
  ) {
    this.isAuthenticated = false;
   }

  ngOnInit() {
    this.authenticationService.logout();
  }
  userPrototype = {
 
    init: function ( email, password ) {
      this.email = email;
      this.password = password
    },
   
    getEmail: function () {
      console.log( "User email is" + this.email);
    },
    getPassword: function () {
      console.log( "User password is" + this.password);
    }
  };

  user(email, password) {
    function F() {};
    F.prototype = this.userPrototype;
   
    var f = new F();
   
    f.init( email, password );
    return f;
  }

  login() {
    if(this.model.username && this.model.password) {
      var user = this.user(this.model.username, this.model.password);
      this.authenticationService.login(user.email, user.password).subscribe(
        (res:Response)=> {
          this.router.navigate(['/app-dashboard'])
        }, (error)=> {
          this.alertService.error("Wrong credentials");
        } 
      );
    } else {
      this.alertService.error("Wrong credentials");
    }
  }

}
