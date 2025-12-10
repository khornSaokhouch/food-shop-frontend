import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Shop {
  id: number;
  name: string;
  description: string;
  location: string;
  hours: string;
  rating?: number;
  phone?: string;
  email?: string;
  bannerImage?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-card.html',
  styleUrls: ['./shop-card.css']
})
export class ShopCardComponent {
  @Input() shop!: Shop;

  getStars(rating?: number): string {
    if (!rating) return '';
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = Math.floor(rating);
    return fullStar.repeat(fullStars) + emptyStar.repeat(5 - fullStars);
  }
}
