import {Component} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {DataStorageService} from "../../services/data-storage.service";

@Component({
  selector: 'app-shop-head',
  standalone: true,
  imports: [],
  templateUrl: './shop-head.component.html',
  styleUrl: './shop-head.component.css'
})
export class ShopHeadComponent {
  constructor(private dataService: DataServiceService, private dataStorage: DataStorageService) {
  }

  getAllProducts() {
    this.dataService.getAllProducts().subscribe(
      products => {
        this.dataStorage.setProducts(products);
      }
    )
  }

  getMenProducts() {
    this.dataService.getMenProducts().subscribe(
      products => {
        this.dataStorage.setProducts(products);
      }
    )
  }

  getWomenProducts() {
    this.dataService.getWomenProducts().subscribe(
      products => {
        this.dataStorage.setProducts(products);
      }
    )
  }
}
