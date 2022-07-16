import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LOGIN_PATH, REGISTER_PATH, URL_BASE_PATH} from "../../settings/settings";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  doLogin(payload: any): Observable<any> {
    return this._http.post(URL_BASE_PATH + LOGIN_PATH, payload)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }

  doRegister(payload: any) {
    return this._http.post(URL_BASE_PATH + REGISTER_PATH, payload)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }
}
