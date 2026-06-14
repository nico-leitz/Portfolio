import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { Header } from '../../shared/components/header/header';
import { AboutMe } from "../../shared/components/about-me/about-me";

@Component({
  selector: 'app-home',
  imports: [Header, HeroSection, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
