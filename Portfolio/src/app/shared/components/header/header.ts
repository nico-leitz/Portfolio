import { Component, signal, inject } from '@angular/core'; 
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, TranslateDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  public currentLang = signal<'EN' | 'DE'>('EN');
  public isMenuOpen = signal<boolean>(false);

  private translate = inject(TranslateService);

  public toggleLanguage(): void {
    const newLang = this.currentLang() === 'EN' ? 'DE' : 'EN';
    this.currentLang.set(newLang);

    this.translate.use(newLang.toLowerCase()); 
  }

  public toggleMenu(): void {
    this.isMenuOpen.update(value => {
      const newState = !value;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  }
}