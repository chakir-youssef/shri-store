import { Component ,Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Category} from "../../../entity";
@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    NgOptimizedImage,RouterLink
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input() category?:Category;

}
