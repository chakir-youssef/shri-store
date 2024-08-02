import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.css'
})
export class AboutHeroComponent {

}
