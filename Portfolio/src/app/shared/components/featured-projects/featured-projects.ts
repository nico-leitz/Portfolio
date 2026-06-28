import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { FeaturedProjectsDialog } from '../featured-projects-dialog/featured-projects-dialog';

@Component({
  selector: 'app-featured-projects',
  imports: [FeaturedProjectsDialog],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  projects: Project[] = [
    {
      number: '01',
      title: 'Join',
      tech: ['CSS', 'HTML', 'Supabase', 'Angular', 'TypeScript'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: '/assets/featured-projects/join.svg',
      github: '#',
      live: '#',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: '/assets/featured-projects/epl.svg',
      github: 'https://github.com/nico-leitz/El_Pollo_Loco',
      live: '#',
    },
  ];

  activeProject: Project | null = null;
  
  hoveredProject: Project | null = null;

  openProjectDialog(project: Project): void {
    this.activeProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectDialog(): void {
    this.activeProject = null;
    document.body.style.overflow = '';
  }

  nextProject(event: Event): void {
    event.stopPropagation();
    if (!this.activeProject) return;

    const currentIndex = this.projects.findIndex((p) => p.title === this.activeProject!.title);
    const nextIndex = (currentIndex + 1) % this.projects.length;

    this.activeProject = this.projects[nextIndex];
  }
}