import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AutentificationService } from '../services/index';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  model: any = {};
  loading = false;
  add = false;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private authenticationService: AutentificationService) { }

  ngOnInit() {}

  moviePrototype = {
 
    init: function (movieName, genere, duration, image, rating) {
      this.movieName = movieName;
      this.genere = genere;
      this.duration = duration;
      this.image = image;
      this.rating = rating;
    }
  };

  movie(movieName, genere, duration, image, rating) {
    function Movie() {};
    Movie.prototype = this.moviePrototype;
   
    var movie = new Movie();
   
    movie.init( movieName, genere, duration, image, rating );
    return movie;
  }


  addMovie() {
    if(this.model.movieName && this.model.genere && this.model.image && this.model.duration) {
      var movie = this.movie(this.model.movieName, this.model.genere, this.model.duration, this.model.image, this.model.rating);

      this.authenticationService.addMovie(movie.movieName, movie.genere, movie.duration, movie.image, movie.rating).subscribe(
        (res:any)=> {
          this.add = true;
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
