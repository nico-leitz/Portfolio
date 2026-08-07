import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

/**
 * @description
 * A standalone component that manages the contact form.
 * It handles user input validation, manages submission states via signals, 
 * and processes the HTTP request to send the form data to the backend.
 */
@Component({
  selector: 'app-contact-me',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  /**
   * Reactive signal indicating whether the form has been successfully submitted.
   * This is typically used in the template to display a success message or overlay.
   * 
   * @type {import('@angular/core').WritableSignal<boolean>}
   */
  public isSubmitted = signal<boolean>(false);

  /**
   * Reactive signal tracking if the user has attempted to submit the form.
   * Useful for deferring the display of validation errors until after the first submission attempt.
   * 
   * @type {import('@angular/core').WritableSignal<boolean>}
   */
  public submitAttempt = signal<boolean>(false);

  /**
   * The reactive form model defining the structure and validation rules for the contact form.
   * Includes fields for the user's name, email, message, and mandatory privacy policy agreement.
   * 
   * @type {FormGroup}
   */
  public contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    policy: [false, Validators.requiredTrue]
  });

  /**
   * Handles the form submission event.
   * 
   * Flags the form as attempted. If the form is invalid, it marks all controls as touched 
   * to trigger validation error messages in the UI. If valid, it proceeds to send the data.
   * 
   * @returns {void}
   */
  public onSubmit(): void {
    this.submitAttempt.set(true);
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.sendFormData();
  }

  /**
   * Executes the HTTP POST request to transmit the valid form data to the backend.
   * Subscribes to the response and delegates to the appropriate success or error handlers.
   * 
   * @private
   * @returns {void}
   */
  private sendFormData(): void {
    this.http.post('contact_form_mail.php', this.contactForm.value).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError()
    });
  }

  /**
   * Processes a successful form submission response.
   * 
   * Updates the UI state to show the success view, disables body scrolling 
   * (to accommodate a potential success modal or overlay), and schedules a complete 
   * reset of the form state after a 3-second delay.
   * 
   * @private
   * @returns {void}
   */
  private handleSuccess(): void {
    this.isSubmitted.set(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.resetFormState(), 3000);
  }

  /**
   * Restores the form and component to their initial pristine state.
   * 
   * Clears all input values, resets the submission signals, and restores 
   * the default body scrolling behavior.
   * 
   * @private
   * @returns {void}
   */
  private resetFormState(): void {
    this.contactForm.reset();
    this.submitAttempt.set(false);
    this.isSubmitted.set(false);
    document.body.style.overflow = '';
  }

  /**
   * Processes errors that occur during the HTTP POST request.
   * 
   * Logs the error to the console for debugging purposes and resets the 
   * submission attempt state, allowing the user to try submitting again.
   * 
   * @private
   * @returns {void}
   */
  private handleError(): void {
    console.error('Fehler beim Senden der E-Mail');
    this.submitAttempt.set(false);
  }
}