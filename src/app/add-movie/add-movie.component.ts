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

  moviePrototype = {
 
    init: function (movieName, genere, duration, rating) {
      this.movieName = movieName;
      this.genere = genere;
      this.duration = duration;
      this.rating = rating;
    }
  };

  movie(movieName, genere, duration, rating) {
    function F() {};
    F.prototype = this.moviePrototype;
   
    var f = new F();
   
    f.init( movieName, genere, duration, rating );
    return f;
  }


  add() {
    if(this.model.movieName && this.model.genere && this.model.duration) {
      var movie = this.movie(this.model.movieName, this.model.genere, this.model.duration, this.model.rating);

      this.authenticationService.addMovie(movie.movieName, movie.genere, movie.duration, movie.rating).subscribe(
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
