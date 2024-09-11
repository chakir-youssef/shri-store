import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category, Product } from '../../entity';
import { products, categories ,sliderProducts ,featuredProducts} from '../../../Data/data';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  menProducts: Product[] = [];
  womenProducts: Product[] = [];
  menProductsObs!: Observable<Product[]>;
  womenProductsObs!: Observable<Product[]>;
  productsObs!: Observable<Product[]>;
  categoryObs!: Observable<Category[]>;
  featuredObs!:Observable<Product[]>;
  sliderObs!:Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.productsObs = of(products);
    this.categoryObs = of(categories);

    products.map((product) => {
      if (product.gender?.toLowerCase() == 'men') {
        this.menProducts.push(product);
      } else if (product.gender?.toLowerCase() == 'women') {
        this.womenProducts.push(product);
      }
    });

    this.menProductsObs = of(this.menProducts);
    this.womenProductsObs = of(this.womenProducts);
    this.sliderObs=of(sliderProducts)
    this.featuredObs=of(featuredProducts)
  }

  getAllProducts(): Observable<Product[]> {
    return this.productsObs;
  }

  getMenProducts(): Observable<Product[]> {
    return this.menProductsObs;
  }
  getWomenProducts(): Observable<Product[]> {
    return this.womenProductsObs;
  }
  getAllCategories(): Observable<Category[]> {
    return this.categoryObs;
  }

  getAllFeatured(): Observable<Product[]> {
    return this.featuredObs;
  }

  getSliderProducrs(): Observable<Product[]> {
    return this.sliderObs;
  }
}
