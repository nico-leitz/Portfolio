import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

/**
 * @description
 * A standalone component representing the application's footer section.
 * It provides supplementary navigation links (such as imprint or privacy policy), 
 * handles internationalization, and displays up-to-date copyright information.
 */
@Component({
  selector: 'app-footer-section',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  
  /**
   * A reactive signal holding the current calendar year.
   * Automatically initializes to the current year so the copyright notice 
   * in the template is always up to date without manual maintenance.
   * 
   * @type {import('@angular/core').WritableSignal<number>}
   */
  public currentYear = signal<number>(new Date().getFullYear());
  
}