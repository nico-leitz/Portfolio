import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      console.log('HeroSection hat Sprachwechsel bemerkt:', event.lang);
    });

  }
}