import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  name: string;
  image: string;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrls: ['./category-card.css']
})
export class CategoryCardComponent {
  @Input() category!: Category;
}
