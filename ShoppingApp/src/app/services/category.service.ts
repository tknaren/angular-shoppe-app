import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_BASE_URL = "http://localhost:5000/";
  private CATEGORIES = "api/categories";
  private PRODUCT_CATALOG = "/api/pc";

  //private categories

  constructor(private http:HttpClient) { }

  public getCategories(){  
    
    console.log(this.API_BASE_URL + this.CATEGORIES);
    return this.http.get(this.API_BASE_URL + this.CATEGORIES);
      
  }

}
