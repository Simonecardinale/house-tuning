import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  regexEMAIL =  /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private _fb: FormBuilder) { }

  /**
   * Form initialization
   * @param {any} fields
   */
  initializeForm(fields: any) {
    const formControlnames = {} as any;
    for (let field in fields) {
      formControlnames[field] = [''];
    }

    return this._fb.group(formControlnames);
  }

  /**
   * Form validation
   */
  validationForm(formControl: FormControl, field?: any, passwordValidator?: string) {
    let err = false;
    if(!formControl.value) {
      err = true;
      formControl.setErrors({incorrect: true});
    }
    switch (field){
      case 'email':
      case 'username':
        !formControl.value.match(this.regexEMAIL) ? formControl.setErrors({incorrect: true}) : null;
        break;
      case 'password_confirmation':
        if(formControl.value !== passwordValidator ){
          formControl.setErrors({incorrect: true});
        }
        break;
    }
  }
}
