import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { Product } from 'src/app/services/models';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  //products$:Observable<any>; // declare a observable to get the results of product
  products:Product[] = [];

  constructor(private productCatalogService: ProductCatalogService) { 
    this.productCatalogService.getProducts()
        .subscribe(products => {
          this.products = products as Product[] });
  }

  ngOnInit(): void {
  }

}
