import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  public currentYear = signal<number>(new Date().getFullYear());
}
