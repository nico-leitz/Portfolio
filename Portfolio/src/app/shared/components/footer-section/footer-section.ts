import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer-section',
  imports: [RouterLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  public currentYear = signal<number>(new Date().getFullYear());
}
