import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  public testimonial: Testimonial[] = [
    { text: 'Test 1', author: 'T.Schulz - Frontend Developer' },
    { text: 'Test 2', author: 'H.Janisch - Team Partner' },
    { text: 'Test 3', author: 'M.Mustermann - Developer' },
    { text: 'Test 4', author: 'S.Berger - Fullstack Dev' },
  ];

  isBackHovered = false;
  isNextHovered = false;

  public activeIndex = 0;

  public arrowNext(): void {
    this.activeIndex = this.getNextIndex();
  }

  public arrowBack(): void {
    this.activeIndex = this.getPreviousIndex();
  }

  public jumpTo(index: number): void {
    this.activeIndex = index;
  }

  public getCardClass(index: number): string {
    if (index === this.activeIndex) {
      return 'feedback-card--active';
    }
    if (index === this.getPreviousIndex()) {
      return 'feedback-card--previous';
    }
    if (index === this.getNextIndex()) {
      return 'feedback-card--next';
    }
    return 'feedback-card--hidden';
  }

  private getPreviousIndex(): number {
    return this.activeIndex === 0
      ? this.testimonial.length - 1
      : this.activeIndex - 1;
  }

  private getNextIndex(): number {
    return this.activeIndex === this.testimonial.length - 1
      ? 0
      : this.activeIndex + 1;
  }
}