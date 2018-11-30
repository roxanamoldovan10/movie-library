import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AutentificationServiceService {
    authentificated: boolean = false;
    httpOptions: any;
    

  constructor(private http: HttpClient, 
    private router: Router) {}

    login(email: string, password: string): Observable<any> {
        this.authentificated = true;
        
    
        var options = {params: {email: email, password: password}}
        return this.http.get(`http://localhost:3000/api/login`, options)
            .map((res: any) => {
                var value = [res.result.role];
                localStorage.setItem('userDetails', JSON.stringify(res.result.role))
                localStorage.setItem('currentUser', JSON.stringify(email))
            });
    }

    register(email: string, password: string): Observable<any> {
    
        var options = {email: email, password: password}
        return this.http.post(`http://localhost:3000/api/register`, options)
            .map((res:Response) => 
            res);
    }


    addMovie(name: string, genere: string, duration: string, rating: number): Observable<any> {
    
        var options = {name: name, genere: genere, duration: duration, rating: rating}
        return this.http.post(`http://localhost:3000/api/add`, options)
            .map((res:Response) => 
            res);
    }
    
    getAuth() {
        console.log(this.authentificated);
        return this.authentificated;
        
    }

    logout() {
        localStorage.removeItem('currentUser');
        return false;
    }

    updateMovie(movieDetails: any) {
        var options = {movie: movieDetails}
        return this.http.put(`http://localhost:3000/api/update`, options)
            .map((res:Response) => 
            res);
    }
    

}
