// src/app/pages/category/category.component.ts

import { Component } from '@angular/core';
import { ProductSectionComponent } from '../../components/product-section/product-section';
import { CategorySectionComponent } from '../../components/category-section/category-section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ProductSectionComponent, CategorySectionComponent, CommonModule],
  templateUrl: './category.html', // Updated template
  // Assuming minimal styling needed here, keeping file reference
  styleUrls: ['./category.css'], 
})
export class CategoryComponent {
  // This property holds the currently selected category name (e.g., 'Fruits')
  selectedCategory: string = '';

  // Removed the explicit onCategorySelected(category: string) method
  // because the template handles the assignment directly:
  // (categorySelected)="selectedCategory = $event"
}