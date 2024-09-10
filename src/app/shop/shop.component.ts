import {Component, OnInit} from '@angular/core';
import {ShopHeadComponent} from "../components/shop-head/shop-head.component";
import {ShopSideBarComponent} from "../components/shop-side-bar/shop-side-bar.component";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {DataServiceService} from "../services/data-service.service";
import {Product} from "../../entity";
import {NgForOf} from "@angular/common";
import {DataStorageService} from "../services/data-storage.service";
import {OurBrandsComponent} from "../components/our-brands/our-brands.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ShopHeadComponent,
    ShopSideBarComponent,
    ProductCardComponent,
    NgForOf,
    OurBrandsComponent,
    FooterComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  products: Product[] = []

  constructor(private dataService: DataServiceService, private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.dataService.getAllProducts().subscribe(
      products =>  this.dataStorage.setProducts(products));

    this.dataStorage.currentProducts.subscribe(
      products => this.products = products);

  }
}
