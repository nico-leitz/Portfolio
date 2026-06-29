import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, TranslatePipe, TranslateDirective],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  public isSubmitted = signal<boolean>(false);

  public onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      console.log('Formular-Daten:', contactForm.value);
      

      this.isSubmitted.set(true);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        contactForm.resetForm();
        this.isSubmitted.set(false);
        document.body.style.overflow = '';
      }, 3000);
    }
  }
}
