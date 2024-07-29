import {Component, OnInit} from '@angular/core';
import {FeaturedCardComponent} from "../featured-card/featured-card.component";
import {DataServiceService} from "../../services/data-service.service";
import {Product} from "../../../entity";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [
    FeaturedCardComponent,
    NgForOf
  ],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit {

  featureds!: Product[];

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit() {
    this.dataService.getAllFeatured().subscribe(data => {
      this.featureds = data;
    })
  }
}
