// src/app/components/shop-details/shop-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SHOP_LIST, Shop } from '../../data/shop';
import { PRODUCTS, Product } from '../../data/products';
import { CardProductComponent } from '../card-product/card-product'; // Product card

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardProductComponent, // must be imported here
  ],
  templateUrl: './shop-details.html',
  styleUrls: ['./shop-details.css']
})
export class ShopDetailsComponent implements OnInit {
  shop!: Shop;
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const shopId = Number(this.route.snapshot.paramMap.get('id'));
    const foundShop = SHOP_LIST.find(s => s.id === shopId);

    if (foundShop) {
      this.shop = foundShop;
      this.products = PRODUCTS.filter(p => p.shopId === shopId);
    } else {
      console.error(`Shop with ID ${shopId} not found.`);
    }
  }

  getStars(rating?: number): string {
    if (!rating) return '';
    const fullStar = '★';
    const emptyStar = '☆';
    return fullStar.repeat(Math.floor(rating)) + emptyStar.repeat(5 - Math.floor(rating));
  }
}
