import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { DataStorageService } from '../../services/data-storage.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-shop-head',
  standalone: true,
  imports: [NgClass],
  templateUrl: './shop-head.component.html',
  styleUrl: './shop-head.component.css',
})
export class ShopHeadComponent {
  isOpen: number = 0;
  constructor(
    private dataService: DataServiceService,
    private dataStorage: DataStorageService
  ) {}

  getAllProducts() {
    this.dataService.getAllProducts().subscribe((products) => {
      this.dataStorage.setProducts(products);
    });
    this.isOpen = 0;
  }

  getMenProducts() {
    this.dataService.getMenProducts().subscribe((products) => {
      this.dataStorage.setProducts(products);
    });
    this.isOpen = 1;
  }

  getWomenProducts() {
    this.dataService.getWomenProducts().subscribe((products) => {
      this.dataStorage.setProducts(products);
    });
    this.isOpen = 2;
  }
}
