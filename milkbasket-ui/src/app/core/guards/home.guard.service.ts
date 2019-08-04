import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class HomeRouteGuard implements CanActivate {
    constructor(private _route: Router, private _authService: AuthService) { }
    canActivate(): any {

        if (this._authService.isAuthenticated()) {
            console.log("dhjs");
            
            return true
        } else {
            this._route.navigate(['/login']);
        }
    }

}