import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public currentLang = signal<'EN' | 'DE'>('EN');

  public isMenuOpen = signal<boolean>(false);

  public toggleLanguage(): void {
    this.currentLang.update(lang => lang === 'EN' ? 'DE' : 'EN');
  }

 public toggleMenu(): void {
    this.isMenuOpen.update(value => {
      const newState = !value;

      document.body.style.overflow = newState ? 'hidden' : '';
      
      return newState;
    });
  }
}