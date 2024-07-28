import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Product} from "../../../entity";

@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.css'
})
export class SliderCardComponent {

   @Input() product?: Product;

}
