import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ShopComponent} from "./shop/shop.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {
    path:"" ,
    component:HomeComponent
  },
  {
    path:"about" ,
    component:AboutComponent
  },
  {
    path:"shop" ,
    component:ShopComponent
  },
  {
    path:"contact" ,
    component:ContactComponent
  },
];
