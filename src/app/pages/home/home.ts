import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { ShopSectionComponent } from '../../components/shop-section/shop-section';
import { ProductPageComponent } from '../../components/product/product';
import { CategoryCardComponent, Category } from '../../components/category-card/category-card';
import { CATEGORIES } from '../../data/categories';
import { Product, PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    ShopSectionComponent,
    ProductPageComponent,
    CategoryCardComponent, // import category card here
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  topProducts: Product[] = [];
  categories: Category[] = [];

  ngOnInit() {
    this.topProducts = PRODUCTS.slice(0, 8);  // Show first 8 products
    this.categories = CATEGORIES;            // Full categories list
  }
}
