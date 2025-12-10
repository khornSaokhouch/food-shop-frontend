// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  newsletterEmail: string = '';

  // Font Awesome icons
  faTwitter = faTwitter;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;

  subscribe() {
    if (this.newsletterEmail) {
      console.log(`Subscribing email: ${this.newsletterEmail}`);
      alert(`Thank you for subscribing! Check your inbox, ${this.newsletterEmail}.`);
      this.newsletterEmail = ''; // Clear the input after submission
    }
  }
}
