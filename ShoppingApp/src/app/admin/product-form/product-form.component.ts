import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from './../../services/models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // this is an observable declared. Always use $ sign for the observable variable
  categories$!: Observable<any>;
  productItem:Product = {};
  _id;
  // The getCategories return the observable 
  constructor(
    private router:Router, // Router service is included to redirect to the Product list once the prodduct is added
    private route: ActivatedRoute, // To pull the route parameters
    private categoryService: CategoryService, 
    private productCatalogService: ProductCatalogService) 
  { 
    this.categories$ = categoryService.getCategories();
    // to get the name parameter from the route url
    this._id = this.route.snapshot.paramMap.get('id');

    if (this._id) 
      this.productCatalogService.getProduct(this._id)
        .pipe(take(1))
        .subscribe((pr) => 
          {
            this.productItem = pr[0];
          });
      
  }

  ngOnInit(): void {
  }

  save(product:any){
    //console.log(product);
    if (this._id) {
      this.productCatalogService.updateProduct(product)
      .subscribe((res:any) => console.log(res));
    }else{
      this.productCatalogService.saveProduct(product)
      .subscribe((res:any) => console.log(res));
    }
    this.router.navigate(['admin/products']);
  }

  // updateProduct(name:String, product:any){
  //   this.productCatalogService.updateProduct(name, product)
  //     .subscribe((res:any) => console.log(res));

  //   this.router.navigate(['admin/products']);
  // }

}
