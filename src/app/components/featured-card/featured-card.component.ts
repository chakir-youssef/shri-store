import { Component,Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Product} from "../../../entity";
@Component({
  selector: 'app-featured-card',
  standalone: true,
  imports: [
    NgOptimizedImage,NgbModule
  ],
  templateUrl: './featured-card.component.html',
  styleUrl: './featured-card.component.css'
})


export class FeaturedCardComponent {
  @Input() featured!:Product;
}

