import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, PRODUCTS } from '../../data/products';
import { CardProductComponent } from '../card-product/card-product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardProductComponent],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class ProductPageComponent {
  @Input() products: Product[] = PRODUCTS; 
}
