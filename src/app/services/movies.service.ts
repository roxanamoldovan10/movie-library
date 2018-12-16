import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../movie';
import { Response } from '@angular/http';

@Injectable()
export class MoviesService {
  code: string = '';

  constructor(private http: Http, 
    private router: Router) { }


  getmovies(): Observable<Movie[]>{
        return this.http.get(`http://localhost:3000/movies/getMovies`)
            .map(this.extractData);

  }
  private extractData(res: Response) {
    let body = res.json();
    return body.result || { };
 }
}
