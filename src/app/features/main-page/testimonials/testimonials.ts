import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/**
 * @description
 * Defines the structure for a single testimonial entry.
 */
interface Testimonial {
  /** The content or quote provided by the author. */
  text: string;
  /** The name of the person providing the testimonial. */
  name: string;
}

/**
 * @description
 * A standalone component that renders a responsive carousel of testimonials.
 * It manages the navigation state (next, previous, jump-to) and calculates 
 * dynamic CSS classes to animate the transition between active, previous, 
 * and next items in the layout.
 */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit, OnDestroy {
  /**
   * The collection of testimonials to be displayed in the carousel.
   * Loaded dynamically via TranslateService.
   * 
   * @type {Testimonial[]}
   */
  public testimonial: Testimonial[] = [];

  /**
   * Tracks whether the user is hovering over the "Back" navigation arrow.
   * Used in the template to trigger hover animations or specific styling.
   * 
   * @type {boolean}
   */
  isBackHovered = false;

  /**
   * Tracks whether the user is hovering over the "Next" navigation arrow.
   * 
   * @type {boolean}
   */
  isNextHovered = false;

  /**
   * The index of the currently active/visible testimonial in the carousel.
   * Defaults to 0 (the first item).
   * 
   * @type {number}
   */
  public activeIndex = 0;

  private translationSub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Lädt die Testimonials aus dem JSON und lauscht auf Sprachwechsel
    this.translationSub = this.translate
      .stream('colleague-feedback.testimonials')
      .subscribe((data: Testimonial[]) => {
        this.testimonial = data || [];
        
        // Verhindert Fehler, falls das Array nach einem Sprachwechsel kürzer sein sollte
        if (this.activeIndex >= this.testimonial.length) {
          this.activeIndex = 0;
        }
      });
  }

  ngOnDestroy(): void {
    // Memory Leaks verhindern
    if (this.translationSub) {
      this.translationSub.unsubscribe();
    }
  }

  /**
   * Advances the carousel to the next testimonial.
   * Wraps around to the beginning if the current item is the last one.
   * 
   * @returns {void}
   */
  public arrowNext(): void {
    this.activeIndex = this.getNextIndex();
  }

  /**
   * Navigates the carousel back to the previous testimonial.
   * Wraps around to the end if the current item is the first one.
   * 
   * @returns {void}
   */
  public arrowBack(): void {
    this.activeIndex = this.getPreviousIndex();
  }

  /**
   * Jumps directly to a specific testimonial index.
   * Typically triggered by pagination indicators (e.g., dots) in the UI.
   * 
   * @param {number} index - The target index to set as active.
   * @returns {void}
   */
  public jumpTo(index: number): void {
    this.activeIndex = index;
  }

  /**
   * Determines the structural CSS class for a given testimonial card based on its 
   * position relative to the currently active index.
   * 
   * @param {number} index - The index of the card being evaluated.
   * @returns {string} The CSS class representing the card's positional state.
   */
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

  /**
   * Calculates the index immediately preceding the active index.
   * 
   * @private
   * @returns {number} The index of the previous item.
   */
  private getPreviousIndex(): number {
    if (this.testimonial.length === 0) return 0;
    return this.activeIndex === 0
      ? this.testimonial.length - 1
      : this.activeIndex - 1;
  }

  /**
   * Calculates the index immediately following the active index.
   * 
   * @private
   * @returns {number} The index of the next item.
   */
  private getNextIndex(): number {
    if (this.testimonial.length === 0) return 0;
    return this.activeIndex === this.testimonial.length - 1
      ? 0
      : this.activeIndex + 1;
  }
}