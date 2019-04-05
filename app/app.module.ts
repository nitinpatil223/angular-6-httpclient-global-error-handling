import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpErrorInterceptor } from './error-interceptor';
import { AppComponent } from './app.component';
import { CustomerService } from './services/customer.service';
import { NotificationComponent } from './notification/notification.component';
import { BaseService } from './services/base.service';
import { ProductService } from './services/product.service';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ], 
  declarations: [ AppComponent, NotificationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    CustomerService,
    BaseService,
    ProductService]
})
export class AppModule { }

