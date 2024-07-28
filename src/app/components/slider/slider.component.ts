import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CommonModule} from "@angular/common";
import {SliderCardComponent} from "../slider-card/slider-card.component";
import {Product} from "../../../entity";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  imports: [NgOptimizedImage, CommonModule, SliderCardComponent ],
  standalone: true,
  selector: 'app-slider',
  styleUrl: './slider.component.css',
  templateUrl: './slider.component.html',

})
export class SliderComponent implements OnInit {

  constructor(private dataService: DataServiceService) {
  }

  products: Product[] = []
  selectedId: number = 1;

numberSlides!:number;
  ngOnInit() {
    this.dataService.getAllProducts().subscribe(data => {
      this.products = data;
      this.numberSlides=this.products.length
    });
  }

  goNext() {
    this.selectedId == 0 ? this.selectedId = this.products.length - 1 : this.selectedId--


  }

  goPrevious() {
    this.selectedId == this.products.length - 1 ? this.selectedId = 0 : this.selectedId++
  }

  changeSlider(i: number) {
    this.selectedId=i;
  }
}
