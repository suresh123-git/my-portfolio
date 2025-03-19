import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor() {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.next(savedTheme === 'dark');
      this.applyTheme(savedTheme === 'dark');
      return;
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode.next(prefersDark);
    this.applyTheme(prefersDark);
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.next(savedTheme === 'dark');
      this.applyTheme(savedTheme === 'dark');
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode.next(prefersDark);
    this.applyTheme(prefersDark);
  }

  toggleTheme() {
    const currentTheme = this.darkMode.value;
    const newTheme = !currentTheme;
    
    this.darkMode.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }

  isDarkMode() {
    return this.darkMode.asObservable();
  }

  private applyTheme(isDark: boolean) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }
} 