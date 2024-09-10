import {Component, Input} from '@angular/core';
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {NgOptimizedImage} from "@angular/common";
import {Product} from "../../../entity";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgbRating,
    NgOptimizedImage
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() product!:Product;
}
