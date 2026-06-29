import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';

@Component({
  selector: 'app-footer-section',
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  public currentYear = signal<number>(new Date().getFullYear());
}
