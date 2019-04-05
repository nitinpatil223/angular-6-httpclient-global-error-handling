import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.getProduct(id);
    }); 
  }

  getProduct(id){
    this.product = this.productList.filter(x=>x.id == id)[0];
  }
  
  productList: Array<any> = [];
}
