import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {USER_HOME_PAGE_PATHS, PAGE_NAMES} from "../../settings/settings";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  homePagePath: any;
  pageNames: any;
  screenSize!: number;

  constructor(private _router: Router,
              private _authSrv: AuthService) {
    this.homePagePath = USER_HOME_PAGE_PATHS;
    this.pageNames = PAGE_NAMES;
    this.screenSize = window.screen.width;
  }

  ngOnInit(): void {
  }

  /**
   * Activate routing
   * @param {string} path
   */
  navigateTo(path: string) {
    this._router.navigate([path]);
  }



}
