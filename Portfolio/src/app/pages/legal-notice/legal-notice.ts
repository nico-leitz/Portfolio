import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { FooterSection } from "../../shared/components/footer-section/footer-section";

@Component({
  selector: 'app-legal-notice',
  imports: [Header, FooterSection],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
