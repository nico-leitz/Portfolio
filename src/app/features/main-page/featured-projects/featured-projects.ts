import { Component } from '@angular/core';
import { Project } from '@core/interfaces/project';
import { FeaturedProjectsDialog } from '../featured-projects-dialog/featured-projects-dialog';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * @description
 * A component that showcases a list of featured portfolio projects.
 * It manages the display of project summaries and handles the state, 
 * layout locking, and navigation for a detailed project modal dialog.
 */
@Component({
  selector: 'app-featured-projects',
  imports: [FeaturedProjectsDialog, TranslatePipe],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  /**
   * A static array containing the data for the featured projects.
   * Includes metadata such as the project's title, technologies used, 
   * description, image assets, and external links.
   * 
   * @type {Project[]}
   */
  projects: Project[] = [
    {
      number: '01',
      title: 'Join',
      tech: ['CSS', 'HTML', 'Supabase', 'Angular', 'TypeScript'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: '/assets/featured-projects/join.svg',
      github: 'https://github.com/nico-leitz/Join',
      live: 'https://join.nico-leiteritz.de',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: '/assets/featured-projects/epl.svg',
      github: 'https://github.com/nico-leitz/El_Pollo_Loco',
      live: 'https://el-pollo-loco.nico-leiteritz.de',
    },
  ];

  /**
   * Holds the currently selected project to be displayed in the detailed dialog.
   * When this is set to `null`, the dialog is hidden.
   * 
   * @type {Project | null}
   */
  activeProject: Project | null = null;
  
  /**
   * Tracks the project currently being hovered over by the user's cursor.
   * Typically used in the template to apply dynamic CSS styles or hover animations.
   * 
   * @type {Project | null}
   */
  hoveredProject: Project | null = null;

  /**
   * Opens the detailed modal dialog for a specific project.
   * 
   * Updates the `activeProject` state and disables scrolling on the document 
   * body to ensure the user cannot scroll the background while the modal is open.
   * 
   * @param {Project} project - The project instance to display in the dialog.
   * @returns {void}
   */
  openProjectDialog(project: Project): void {
    this.activeProject = project;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the project detail dialog.
   * 
   * Clears the `activeProject` state and restores the default scrolling 
   * behavior of the browser window.
   * 
   * @returns {void}
   */
  closeProjectDialog(): void {
    this.activeProject = null;
    document.body.style.overflow = '';
  }

  /**
   * Navigates to the next project in the list while the dialog is open.
   * 
   * Calculates the current project's index and smoothly loops back to the first 
   * project if the end of the array is reached. It also stops event propagation 
   * to prevent the click from bubbling up and unintentionally closing the dialog 
   * (e.g., if the button is overlaying a backdrop).
   * 
   * @param {Event} event - The DOM event triggered by clicking the "next" button.
   * @returns {void}
   */
  nextProject(event: Event): void {
    event.stopPropagation();
    if (!this.activeProject) return;

    const currentIndex = this.projects.findIndex((p) => p.title === this.activeProject!.title);
    const nextIndex = (currentIndex + 1) % this.projects.length;

    this.activeProject = this.projects[nextIndex];
  }
}