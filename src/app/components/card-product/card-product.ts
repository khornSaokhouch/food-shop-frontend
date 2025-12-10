import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- ADD THIS
import { Product } from '../../data/products';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- ADD RouterModule here
  templateUrl: './card-product.html',
  styleUrls: ['./card-product.css']
})
export class CardProductComponent {
  @Input() product!: Product;
}
