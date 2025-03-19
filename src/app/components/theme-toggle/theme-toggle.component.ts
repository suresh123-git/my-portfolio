import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="toggleTheme()">
      <i class="fas" [class.fa-sun]="!isDark" [class.fa-moon]="isDark"></i>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: var(--text-color);
      background: var(--bg-secondary);

      &:hover {
        transform: scale(1.1);
        background: var(--bg-hover);
      }

      i {
        font-size: 1.2rem;
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode().subscribe(isDark => {
      this.isDark = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 