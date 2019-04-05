import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit{
  customerRecord: object;
  constructor(private route: ActivatedRoute){ }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.getCustomer(id);
    });
  }
  getCustomer(id){
    this.customerRecord = this.customerList.filter(x=>x.id == id)[0];  
  }  

  customerList:Array<any> = [];
}