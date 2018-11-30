import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService, AutentificationServiceService } from '../services/index';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  model: any = {};
  loading = false;
  added = false;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private authenticationService: AutentificationServiceService) { }

  ngOnInit() {}

  add() {
    if(this.model.movieName && this.model.genere && this.model.duration) {
      this.authenticationService.addMovie(this.model.movieName, this.model.genere, this.model.duration, this.model.rating).subscribe(
        (res:Response)=> {
          this.added = true;
        }, (error)=> {
          this.alertService.error("Error");
        } 
      );
    } else {
      this.alertService.error("Error");
    }

    this.loading = true;
    this.alertService.success('Successful', true);
 }

}
