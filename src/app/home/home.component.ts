import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {SliderComponent} from "../components/slider/slider.component";
import {CategoriesComponent} from "../components/categories/categories.component";
import {FeaturedComponent} from "../components/featured/featured.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    SliderComponent,
    CategoriesComponent,
    FeaturedComponent,
    FooterComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
