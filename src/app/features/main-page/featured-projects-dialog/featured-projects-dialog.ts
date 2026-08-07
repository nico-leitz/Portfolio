import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@core/interfaces/project';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * @description
 * A presentational component that renders a detailed modal dialog for a specific project.
 * It receives the project data to display via inputs and delegates user interactions 
 * (like closing the dialog or navigating to the next project) to its parent component via outputs.
 */
@Component({
  selector: 'app-featured-projects-dialog',
  imports: [TranslatePipe],
  templateUrl: './featured-projects-dialog.html',
  styleUrl: './featured-projects-dialog.scss',
})
export class FeaturedProjectsDialog {
  
  /**
   * The project data to be displayed in the dialog.
   * This is a mandatory input; the component cannot render without it.
   * 
   * @type {Project}
   */
  @Input({ required: true }) project!: Project; 
  
  /**
   * Event emitted when the user triggers the close action (e.g., clicking a close button or the backdrop).
   * The parent component should listen to this event to clear the active project and hide the dialog.
   * 
   * @type {EventEmitter<void>}
   */
  @Output() closeDialog = new EventEmitter<void>();

  /**
   * Event emitted when the user clicks the "Next Project" navigation button.
   * Passes the original DOM event upward so the parent component can handle behaviors 
   * like `event.stopPropagation()` to prevent unwanted side effects.
   * 
   * @type {EventEmitter<Event>}
   */
  @Output() nextProject = new EventEmitter<Event>();

  /**
   * Handles the close action triggered by the user interface.
   * Emits the `closeDialog` event to notify the parent component to dismantle or hide this dialog.
   * 
   * @returns {void}
   */
  onClose(): void {
    this.closeDialog.emit();
  }

  /**
   * Handles the navigation action to view the next project in the list.
   * Emits the `nextProject` event, passing along the original DOM event.
   * 
   * @param {Event} event - The DOM click event triggered by the navigation button.
   * @returns {void}
   */
  onNext(event: Event): void {
    this.nextProject.emit(event);
  }
}