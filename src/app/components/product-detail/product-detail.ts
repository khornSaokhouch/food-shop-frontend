// src/app/components/product-detail/product-detail.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PRODUCTS, Product } from '../../data/products';
// Assuming you have defined the Review interface and REVIEWS data array
import { REVIEWS, Review } from '../../data/reviews'; 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProductDetailComponent {
  product: Product | undefined;
  reviews: Review[] = [];
  quantity: number = 1; // 👈 Added quantity property

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
    if (this.product) {
      // FIX: Use optional chaining here just in case, though this.product is checked above.
      this.reviews = REVIEWS.filter(r => r.productId === this.product?.id); 
    }
  }

  averageRating(): number {
    if (!this.reviews.length) return 0;
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    // Return average rounded to one decimal place
    return Math.round((sum / this.reviews.length) * 10) / 10; 
  }
  
  // 👈 Added changeQuantity method
  changeQuantity(delta: number): void {
    if (this.product && this.quantity + delta >= 1 && this.quantity + delta <= this.product.stock) {
      this.quantity += delta;
    }
  }

  // 👈 Added addToCart method
  addToCart(): void {
    if (this.product) {
      // In a real application, this would call a CartService
      console.log(`[ACTION] Added ${this.quantity} x ${this.product.name} to cart.`);
      // Optional: Display a toast/notification here
    }
  }
}