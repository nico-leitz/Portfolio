import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { FooterSection } from "../../shared/components/footer-section/footer-section";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Header, FooterSection, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}