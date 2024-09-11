import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  email="shri-store@gmail.com"
  showNav: boolean = false;

  showNavBar() {
    this.showNav = !this.showNav;
  }
}
