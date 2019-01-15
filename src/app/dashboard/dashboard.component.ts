import { MoviesService } from './../services/movies.service';
import { AutentificationService } from './../services/authentification-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type: any
  loggedin: boolean;
  role: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AutentificationService: AutentificationService,
    private moviesService : MoviesService) {
      this.loggedin = JSON.parse(localStorage.getItem('currentUser')) ? true:false;
     }

  ngOnInit() {
    this.role = localStorage.getItem('userDetails');
  }

  logout() {
    this.loggedin = this.AutentificationService.logout();
    this.router.navigate(['/app-login']);
  }

}
