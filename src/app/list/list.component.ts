import { AlertService } from './../services/alert-service.service';
import { AutentificationServiceService } from './../services/authentification-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/index';
import { FormsModule } from '@angular/forms';
import {RatingModule} from "ngx-rating";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movieList: any;
  movieDetails: any;
  starsCount: number;
  rate: number;
  role: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private alertService: AlertService,
    private authenticationService: AutentificationServiceService
  ) { }

  ngOnInit() {
    this.moviesService.getmovies()
    .subscribe(
      (res:any)=> {
        this.movieList = res;
      }, (error)=> {
        this.alertService.error("Error when getting the list");
      } 
    );
    this.role = localStorage.getItem('userDetails');
  }

  showDetails(movie) {
    this.movieDetails = movie;
    this.rate = movie.rating;
  }

  addRating(starsCount) {
    this.movieDetails.rating = (this.rate + starsCount)/2;
    

    this.authenticationService.updateMovie(this.movieDetails).subscribe(
      (res:any)=> {
        console.log('added!!');
        this.alertService.success('Successful', true);
      }, (error)=> {
        this.alertService.error("Error");
      } 
    );
  }

  deleteMovie(movieDetails) {
  
    this.authenticationService.deleteMovie(this.movieDetails).subscribe(
      (res:any)=> {
        var index = this.movieList.indexOf(movieDetails);
        this.movieList.splice(index, 1);
        this.movieDetails = undefined;
        this.alertService.success('Successful', true);
      }, (error)=> {
        this.alertService.error("Error");
      } 
    );
  }

}
