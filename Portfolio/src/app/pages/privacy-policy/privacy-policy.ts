import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { FooterSection } from "../../shared/components/footer-section/footer-section";
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Header, FooterSection, TranslatePipe, TranslateDirective],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}