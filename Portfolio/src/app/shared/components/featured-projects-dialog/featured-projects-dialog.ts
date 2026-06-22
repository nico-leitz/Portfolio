import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-featured-projects-dialog',
  imports: [],
  templateUrl: './featured-projects-dialog.html',
  styleUrl: './featured-projects-dialog.scss',
})
export class FeaturedProjectsDialog {
  @Input({ required: true }) project!: Project; 
  
  @Output() closeDialog = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<Event>();

  onClose(): void {
    this.closeDialog.emit();
  }

  onNext(event: Event): void {
    this.nextProject.emit(event);
  }
}
