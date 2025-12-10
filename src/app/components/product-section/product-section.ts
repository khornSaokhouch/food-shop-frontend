import { Component, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, PRODUCTS } from '../../data/products';
import { CardProductComponent } from '../card-product/card-product';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.html',
  styleUrls: ['./product-section.css'],
  standalone: true,
  imports: [CommonModule, CardProductComponent],
})
export class ProductSectionComponent implements OnChanges {
  @Input() selectedCategory: string = '';
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = PRODUCTS;

  ngOnChanges(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(
        p => p.category === this.selectedCategory
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
