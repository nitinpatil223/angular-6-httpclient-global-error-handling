import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector:'app-customer-list',
  templateUrl: './customer-list.component.html'
})

export class CustomerListComponent implements OnInit{
  customers: Array<any>;
  error: any = '';
  jsonResult: any;
  constructor(private custService: CustomerService){}

  ngOnInit(){    
    this.custService.getCustomers()
        .subscribe(
          response =>  this.customers = response,
          error => this.error = error
        );
  }

  fetch(url){
     this.custService.fetch(url)
        .subscribe(
          response =>  {
            this.jsonResult = response;
            setTimeout(()=>{
              this.jsonResult = null;
            }, 4000);
            
            },
          error => {
            this.error = error;
             setTimeout(()=>{
              this.error = null;
            }, 2000);
          }
        );
  }

}