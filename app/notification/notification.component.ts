import { Component, OnInit } from '@angular/core';
import { BaseService, ErrorModel } from '../services/base.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  error : ErrorModel;
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    //this.error = this.baseService.error;

    this.clear()
    this.error.message.push("This the first line");
    this.error.message.push("this is the secon line");
    this.error.msgType = 1;/**/
  }

  clear(){
    this.error = new ErrorModel();
    this.error.message =[];
    this.error.msgType = null;
  }

}