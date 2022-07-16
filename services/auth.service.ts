import { Injectable } from '@angular/core';
import {LOGIN_PAGE_PATH, USER_HOME_PAGE_PATHS} from "../../settings/settings";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private _router: Router) { }

  login() {
      this.currentUser = true;
      this._router.navigate([USER_HOME_PAGE_PATHS.home]);
  }

  logout(): void {
    this.currentUser = null;
    this._router.navigate([LOGIN_PAGE_PATH.login]);
  }
}
