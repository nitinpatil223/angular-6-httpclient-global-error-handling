import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



//import {_throw} from 'rxjs/observable/throw';

import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {
  
  constructor(private http: HttpClient) {}

  getCustomers(){
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users/")
      /*.pipe(  
        catchError((err: HttpErrorResponse)=>{
          debugger;
          return err;
        })
      )*/        
  }

  fetch(url){
    return this.http.get<any>(url);
  }

  /*private handleError(error: HttpErrorResponse) {    
    let errMsg = '';
    // Client Side Error
    if (error.error instanceof ErrorEvent) {		
      errMsg = `Error: ${error.error.message}`;
    } 
    else {  // Server Side Error
      errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
    }
    // return an observable
    return throwError(errMsg);
  }; */


}