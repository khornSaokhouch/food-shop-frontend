// src/app/components/shop-section/shop-section.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopCardComponent } from '../shop-card/shop-card';
import { SHOP_LIST, Shop } from '../../data/shop';

@Component({
  selector: 'app-shop-section',
  standalone: true,
  imports: [CommonModule, ShopCardComponent, RouterModule], // Import ShopCardComponent
  templateUrl: './shop-section.html',
  styleUrls: ['./shop-section.css']
})
export class ShopSectionComponent {
  shops: Shop[] = SHOP_LIST; // Get all shops
}
