import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
  deleted(message:string){
    alertify.deleted(message)
  }
  updated(message:string){
    alertify.updated(message)
  }
}

