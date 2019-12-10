import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }
  warning(message:string){
    alertify.warning(message)
  }
}

