import { Component } from '@angular/core';
import { Header } from '@shared/header/header';
import { FooterSection } from '@shared/footer-section/footer-section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Header, FooterSection, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}