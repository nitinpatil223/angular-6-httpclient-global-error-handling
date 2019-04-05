import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  public error : ErrorModel;
  constructor() { }
 
  setMessage(msg: string, type: number){
    debugger;
    if(this.error == null){
      this.error = new ErrorModel();
      this.error.message = [];
    }
      
    this.error.message.push(msg);
    this.error.msgType = type;
  }
}

export class ErrorModel {
  message: Array<string>;
  msgType: number;
}