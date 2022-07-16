import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedValuesService {

  size!: number;

  constructor() { }
}
