import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  public isSubmitted = signal<boolean>(false);

  public onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      console.log('Formular-Daten:', contactForm.value);
      

      this.isSubmitted.set(true);

      setTimeout(() => {
        contactForm.resetForm();
        this.isSubmitted.set(false);
      }, 5000);
    }
  }
}
