import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  public isSubmitted = signal<boolean>(false);
  public submitAttempt = signal<boolean>(false);

  public contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    policy: [false, Validators.requiredTrue]
  });

  public onSubmit(): void {
    this.submitAttempt.set(true);
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.sendFormData();
  }

  private sendFormData(): void {
    this.http.post('contact_form_mail.php', this.contactForm.value).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError()
    });
  }

  private handleSuccess(): void {
    this.isSubmitted.set(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.resetFormState(), 3000);
  }

  private resetFormState(): void {
    this.contactForm.reset();
    this.submitAttempt.set(false);
    this.isSubmitted.set(false);
    document.body.style.overflow = '';
  }

  private handleError(): void {
    console.error('Fehler beim Senden der E-Mail');
    this.submitAttempt.set(false);
  }
}