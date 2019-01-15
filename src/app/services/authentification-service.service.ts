import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../movie';
import { Response } from '@angular/http';

@Injectable()
export class AutentificationService {
    authentificated: boolean = false;
    

  constructor(private http: Http, 
    private router: Router) {}

     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      
    login(email: string, password: string): Observable<any> {
        this.authentificated = true;
        
    
        var options = {params: {email: email, password: password}}
        return this.http.get(`http://localhost:3000/api/login`, options)
            .map((res: any) => {
                var result = res.json();
                var value = [result.result.role];
                localStorage.setItem('userDetails', JSON.stringify(result.result.role))
                localStorage.setItem('currentUser', JSON.stringify(email))
            });
    }

    register(email: string, password: string): Observable<any> {
    
        var options = {email: email, password: password}
        return this.http.post(`http://localhost:3000/api/register`, options)
            .map((res:Response) => 
            res);
    }


    addMovie(name: string, genere: string, duration: string, image: string, rating: number): Observable<Movie[]> {
    
        var options = {name: name, genere: genere, duration: duration, image: image, rating: rating}
        return this.http.post(`http://localhost:3000/api/add`, options)
            .map(this.extractData);
    }
    
    getAuth() {
        console.log(this.authentificated);
        return this.authentificated;
        
    }

    logout() {
        localStorage.removeItem('currentUser');
        return false;
    }

    updateMovie(movieDetails: any): Observable<Movie[]> {
        var options = {movie: movieDetails}
        return this.http.put(`http://localhost:3000/api/update`, options)
            .map(this.extractData);
    }

    deleteMovie(movieDetails: any): Observable<Movie[]> {
        var options = {movie: movieDetails}
        return this.http.post(`http://localhost:3000/api/delete`, movieDetails)
            .map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.result || { };
     }

}
