import { Component } from '@angular/core';
import { Header } from '@shared/header/header';
import { FooterSection } from '@shared/footer-section/footer-section';
import { HeroSection } from '@main-page/hero-section/hero-section';
import { AboutMe } from '@main-page/about-me/about-me';
import { SkillsSection } from '@main-page/skills-section/skills-section';
import { FeaturedProjects } from '@main-page/featured-projects/featured-projects';
import { Testimonials } from '@main-page/testimonials/testimonials';
import { ContactMe } from '@main-page/contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [Header, HeroSection, AboutMe, SkillsSection, FeaturedProjects, Testimonials, ContactMe, FooterSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
