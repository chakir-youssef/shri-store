import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, Product} from "../../entity";

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/api/categories');
  }

  getAllFeatured():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/api/featured');
  }
}
