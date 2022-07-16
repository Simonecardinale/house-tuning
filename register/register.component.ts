import { Component, OnInit } from '@angular/core';
import {FormService} from "../services/form.service";
import {AuthService} from "../services/auth.service";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {REGISTER_FORM_FIELDS, LOGIN_PAGE_PATH} from "../../settings/settings";
import {cloneDeep} from 'lodash'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerFormFields: any;

  constructor(private _formSrv: FormService,
              private _authSrv: AuthService,
              private _httpSrv: HttpService,
              private _router: Router) {

    this.registerFormFields = cloneDeep(REGISTER_FORM_FIELDS);

    //initialize register form
    this.registerForm = this._formSrv.initializeForm(this.registerFormFields);
  }

  ngOnInit(): void { }

  executeRgister(){
    const payload = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      password_confirmation: this.registerForm.get('password_confirmation')?.value,
    }

    for(let fields in this.registerFormFields){
      this.registerForm.get(fields)?.setErrors(null);
      this._formSrv.validationForm(this.registerForm.get(fields) as FormControl, fields, this.registerForm.get('password')?.value);
    }

    if(this.registerForm.valid){
      this._httpSrv.doRegister(payload).subscribe({
        next: (response: any) => {
          console.log(response)
        !!response.token ? this._router.navigate([LOGIN_PAGE_PATH.login]) : null;
        }
      })
    }
  }

  /**
   * Return to login page
   */
  returnToLoginPage() {
    this._router.navigate([LOGIN_PAGE_PATH.login])
  }

}
