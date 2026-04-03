import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  readonly resumeUrl = 'assets/images/profile/Suresh%20Lingala%20Resume.pdf';
  readonly resumeFileName = 'Suresh-Lingala-Resume.pdf';

  constructor() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
} 
