import { Injectable } from '@angular/core';
import {Product} from "../../entity";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private dataSource = new BehaviorSubject<Product[]>([]);
  currentProducts = this.dataSource.asObservable();

  setProducts(products: Product[]) {
    this.dataSource.next(products);
  }
  constructor() { }
}
