import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";
import {LOGIN_PAGE_PATH, USER_HOME_PAGE_PATHS} from "../../../settings/settings";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    if (this._authService.isLoggedIn){
      return true;
    }
    this._router.navigate([LOGIN_PAGE_PATH.login]);
    return false;
  }

}
