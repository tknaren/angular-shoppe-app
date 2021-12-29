import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  private API_BASE_URL = environment.ShopAPI.url; // "http://localhost:5000";
  private PRODUCT_CATALOG = "/api/pc";

  constructor(private http:HttpClient) { }

  public saveProduct(product:any):Observable<any>{
    return this.http.post(this.API_BASE_URL + this.PRODUCT_CATALOG, product);
  }

  public getProducts():Observable<any> {
    return this.http.get(this.API_BASE_URL + this.PRODUCT_CATALOG);
  }

  // public getProduct(name:String):Observable<any> {
  //   return this.http.get(this.API_BASE_URL + this.PRODUCT_CATALOG + "/" + name);
  // }

  public getProduct(id:String):Observable<any> {
    return this.http.get(this.API_BASE_URL + this.PRODUCT_CATALOG + "/" + id);
  }  

  public updateProduct(product:any):Observable<any> {
    return this.http.put(this.API_BASE_URL + this.PRODUCT_CATALOG, product);
  }
}
