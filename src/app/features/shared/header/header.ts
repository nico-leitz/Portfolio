import { Component, signal, inject } from '@angular/core'; 
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

/**
 * @description
 * A standalone component representing the application's top header.
 * It manages the primary navigation, responsive mobile menu state, 
 * and user-triggered language switching using `@ngx-translate/core`.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  
  /**
   * Reactive signal tracking the currently selected application language.
   * Restricts the value to either 'EN' (English) or 'DE' (German).
   * Defaults to 'EN'.
   * 
   * @type {import('@angular/core').WritableSignal<'EN' | 'DE'>}
   */
  public currentLang = signal<'EN' | 'DE'>('EN');

  /**
   * Reactive signal tracking the visibility state of the mobile navigation menu.
   * `true` indicates the menu is open, `false` indicates it is closed.
   * 
   * @type {import('@angular/core').WritableSignal<boolean>}
   */
  public isMenuOpen = signal<boolean>(false);

  /**
   * Injected translation service used to update the active language 
   * dynamically across the application.
   * 
   * @private
   */
  private translate = inject(TranslateService);

  /**
   * Toggles the active application language between English ('EN') and German ('DE').
   * 
   * Updates the `currentLang` signal for UI state binding, and instructs the 
   * `TranslateService` to load and apply the corresponding language resources 
   * (using lowercase identifiers 'en' or 'de').
   * 
   * @returns {void}
   */
  public toggleLanguage(): void {
    const newLang = this.currentLang() === 'EN' ? 'DE' : 'EN';
    this.currentLang.set(newLang);

    this.translate.use(newLang.toLowerCase()); 
  }

  /**
   * Toggles the visibility of the mobile navigation menu.
   * 
   * When opening the menu, it disables scrolling on the document body to prevent 
   * the background content from moving while the user interacts with the overlay. 
   * When closing, it restores the default scrolling behavior.
   * 
   * @returns {void}
   */
  public toggleMenu(): void {
    this.isMenuOpen.update(value => {
      const newState = !value;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  }
}