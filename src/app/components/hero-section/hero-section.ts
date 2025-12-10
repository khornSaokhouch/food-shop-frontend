// src/app/components/hero-section/hero-section.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'] 
})
export class HeroSectionComponent {
  query: string = '';

  onSearch() {
    if (!this.query.trim()) return;
    console.log('Searching for:', this.query);
  }
}