import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent {
  isDarkMode = true;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  private isLightTheme = true;
  toggleTheme(): void {
    this.toggleDarkMode();
    const htmlElement = document.documentElement;

    if (!this.isLightTheme) {
      htmlElement.classList.remove('light-theme'); // Remove o tema escuro
    } else {
      htmlElement.classList.add('light-theme'); // Adiciona o tema escuro
    }

    this.isLightTheme = !this.isLightTheme;
  }
}
