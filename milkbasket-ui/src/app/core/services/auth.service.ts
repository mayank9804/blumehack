import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    
    
    constructor(private _http: HttpClient,private _route : Router) { }

    public isAuthenticated() {
        console.log(!!localStorage.getItem('id'));
        
        return !!localStorage.getItem('id')
    }
    public login(custId){
        localStorage.setItem('id',custId)
        this._route.navigate(['/subscriptions']);
    }
    public removeToken(){
        localStorage.removeItem('id')
        this._route.navigate(['/login']);
    }
}
