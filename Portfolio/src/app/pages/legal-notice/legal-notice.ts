import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { FooterSection } from "../../shared/components/footer-section/footer-section";
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, FooterSection, TranslatePipe ,TranslateDirective],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
