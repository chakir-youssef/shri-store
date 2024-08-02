import { Component } from '@angular/core';
import {AboutHeroComponent} from "../components/about-hero/about-hero.component";
import {OurServicesComponent} from "../components/our-services/our-services.component";
import {OurBrandsComponent} from "../components/our-brands/our-brands.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutHeroComponent,
    OurServicesComponent,
    OurBrandsComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
