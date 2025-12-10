import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CATEGORIES, Category } from '../../data/categories';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.html',
  styleUrls: ['./category-section.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CategorySectionComponent {
  categories: Category[] = CATEGORIES;

  @Output() categorySelected = new EventEmitter<string>();

  // Track the currently active category
  selectedCategory: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

  clearCategory() {
    this.selectedCategory = '';
    this.categorySelected.emit('');
  }
}
