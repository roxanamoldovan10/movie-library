import { AlertService } from './../services/alert-service.service';
import { AutentificationServiceService } from './../services/authentification-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, RollCallService, RegisterService } from '../services/index';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rollCallService: RollCallService,
    private alertService: AlertService,
    public registerService: RegisterService,
    private authenticationService: AutentificationServiceService
  ) { }

  ngOnInit() {
    this.rollCallService.getmovies()
    .subscribe(
      (res:any)=> {
        this.movieList = res.result;
      }, (error)=> {
        this.alertService.error("Error when getting the list");
      } 
    );
  }

  showDetails(movie) {
    this.movieDetails = movie;
    this.rate = movie.rating;
  }

  addRating(starsCount) {
    this.movieDetails.rating = (this.rate + starsCount)/2;

    this.authenticationService.updateMovie(this.movieDetails).subscribe(
      (res:Response)=> {
        console.log('added!!');
        this.alertService.success('Successful', true);
      }, (error)=> {
        this.alertService.error("Error");
      } 
    );
  }

}
