import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MoviesService {
  code: string = '';

  constructor(private http: HttpClient, 
    private router: Router) { }


  getmovies(){
        return this.http.get(`http://localhost:3000/movies/getMovies`)
            .map((res:Response) => 
            res);

  }
}
