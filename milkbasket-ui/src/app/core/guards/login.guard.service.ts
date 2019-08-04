import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class LoginRouteGuard implements CanActivate {
    constructor(private _route: Router, private _authService: AuthService) { }
    canActivate(): boolean {

        if (this._authService.isAuthenticated()) {
            this._route.navigate(['/subscriptions']);
        } else {
            return true;
        }
    }

}