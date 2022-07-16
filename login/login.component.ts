import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {USER_HOME_PAGE_PATHS, LOGIN_FORM_FIELDS, ADMIN_USER_HOME_PAGE_PATHS} from "../../settings/settings";
import {FormService} from "../services/form.service";
import {AuthService} from "../services/auth.service";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormFields: any;


  constructor(private _formSrv: FormService,
              private _authSrv: AuthService,
              private _httpSrv: HttpService,
              private _router: Router) {
    this.loginFormFields = cloneDeep(LOGIN_FORM_FIELDS);

    // initialize login form
    this.loginForm = this._formSrv.initializeForm(this.loginFormFields);
  }

  ngOnInit(): void {

  }

  /**
   * Do login
   */
  executeLogin(): void {
    const payload = {
      email: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    for (let fields in this.loginFormFields){
      this.loginForm.get(fields)?.setErrors(null);
      this._formSrv.validationForm(this.loginForm.get(fields) as FormControl, fields);
      console.log(fields)
    }
    if(this.loginForm.valid){
      // this._httpSrv.doLogin(payload)
      //   .subscribe({
      //     next: (response: any) => {
      //       if(!!response.token && response.token !== ''){
      //         this._authSrv.login();
      //       }
      //     }
      //   })
      this._authSrv.login();

    }
  }

  /**
   * Navigate to registration form
   */
  goToRegistrationForm() {
    this._router.navigate([ADMIN_USER_HOME_PAGE_PATHS.register])
  }
}
