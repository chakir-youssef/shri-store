import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../entity";

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {

  constructor(private http:HttpClient) {}

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/products');
  }
}
