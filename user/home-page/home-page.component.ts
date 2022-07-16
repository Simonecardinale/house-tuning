import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _route: Router,
              private _authSrv: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * Do logout
   */
  logout(){
    this._authSrv.logout();
  }
}
