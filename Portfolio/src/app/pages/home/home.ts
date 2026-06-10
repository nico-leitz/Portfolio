import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header ,HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
