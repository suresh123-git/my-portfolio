import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/SureshLingala' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/suresh-lingala' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/SureshLingala' }
  ];
} 