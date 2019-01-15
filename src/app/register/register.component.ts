import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AutentificationService} from '../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private authenticationService: AutentificationService) { }

  ngOnInit() {}

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
    function User() {};
    User.prototype = this.userPrototype;
   
    var user = new User();
   
    user.init( email, password );
    return user;
  }
  
  register() {
    if(this.model.username && this.model.password) {
      var user = this.user(this.model.username, this.model.password);

      this.authenticationService.register(user.email, user.password).subscribe(
        (res:Response)=> {
          this.router.navigate(['/app-login'])
        }, (error)=> {
          this.alertService.error("Wrong credentials");
        } 
      );
    } else {
      this.alertService.error("Wrong credentials");
    }

    this.loading = true;
    this.alertService.success('Registration successful', true);
 }

}
