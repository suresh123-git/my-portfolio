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
    { icon: 'fab fa-github', url: 'https://github.com/suresh123-git' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/lingalasuresh' },
    { icon: 'fab fa-twitter', url: 'https://x.com/LINGALASUR81209' },
    { icon: 'fas fa-envelope', url: 'mailto:lingalasuresh0606@gmail.com' }
  ];
} 