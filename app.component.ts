import { Component } from '@angular/core';
import {Router} from "@angular/router";

// const
import {USER_HOME_PAGE_PATHS, PAGE_NAMES} from "../settings/settings";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inGame';
  homePagePath: any;
  pageNames: any;
  screenSize!: number;

  constructor(private _router: Router,
              private _authSrv: AuthService) {
    this.homePagePath = USER_HOME_PAGE_PATHS;
    this.pageNames = PAGE_NAMES;
    this.screenSize = window.screen.width;
  }

  /**
   * Activate routing
   * @param {string} path
   */
  navigateTo(path: string) {
    this._router.navigate([path]);
  }

  /**
   * Do logout
   */
  logout(){
    this._authSrv.logout();
  }
}
