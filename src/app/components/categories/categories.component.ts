import {Component, OnInit} from '@angular/core';
import {CategoryCardComponent} from "../categorie-card/category-card.component";
import {DataServiceService} from "../../services/data-service.service";
import {Category} from "../../../entity";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CategoryCardComponent,
    CommonModule,
    ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  constructor(private dataService: DataServiceService) {
  }

  categories: Category[]=[];

  ngOnInit() {

    this.dataService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });



  }
}
