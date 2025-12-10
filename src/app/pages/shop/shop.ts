import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCardComponent, Shop } from '../../components/shop-card/shop-card';
import { SHOP_LIST } from '../../data/shop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, ShopCardComponent],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShopPageComponent implements OnInit {
  shops: Shop[] = SHOP_LIST;

  ngOnInit() {}
}
