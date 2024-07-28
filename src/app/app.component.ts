import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {DataServiceService} from "./services/data-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavBarComponent,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataServiceService],

})
export class AppComponent {

}
