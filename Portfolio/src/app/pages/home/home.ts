import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { Header } from '../../shared/components/header/header';
import { AboutMe } from "../../shared/components/about-me/about-me";
import { SkillsSection } from "../../shared/components/skills-section/skills-section";
import { FeaturedProjects } from "../../shared/components/featured-projects/featured-projects";
import { Testimonials } from '../../shared/components/testimonials/testimonials';
import { ContactMe } from "../../shared/components/contact-me/contact-me";
import { FooterSection } from "../../shared/components/footer-section/footer-section";
import { FeaturedProjectsDialog } from '../../shared/components/featured-projects-dialog/featured-projects-dialog';

@Component({
  selector: 'app-home',
  imports: [Header, HeroSection, AboutMe, SkillsSection, FeaturedProjects, Testimonials, ContactMe, FooterSection,FeaturedProjectsDialog],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
