import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
