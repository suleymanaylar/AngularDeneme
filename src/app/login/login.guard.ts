import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AcoountService } from '../services/acoount.service';


@Injectable()


export class LoginGuard implements CanActivate {
    constructor(private accountService: AcoountService, private root: Router) { }
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
        let logged = this.accountService.isloggedin();
        if (logged) {
            return true
        }
        this.root.navigate(["login"]);
        return false;
    }

}