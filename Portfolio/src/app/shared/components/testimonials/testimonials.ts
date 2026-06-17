import { Component, OnInit } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit {
  public testimonial: Testimonial[] = [
    {
      text: 'Test 1',
      author: 'T.Schulz - Frontend Developer',
    },
    {
      text: 'Test 2',
      author: 'H.Janisch - Team Partner',
    },
    {
      text: 'Test 3',
      author: 'M.Mustermann - Developer',
    },
    {
      text: 'Test 4',
      author: 'S.Berger - Fullstack Dev',
    },
  ];

  public displayList: Testimonial[] = [];
  public currentActiveIndex = 1;
  public dotIndicator = 0;

  public disableTransition = false;
  public isAnimating = false;

  ngOnInit(): void {
    this.setupSliderTrack();
  }

  private setupSliderTrack(): void {
    if (this.testimonial.length === 0) return;

    const firstClone = this.testimonial[0];
    const lastClone = this.testimonial[this.testimonial.length - 1];

    this.displayList = [lastClone, ...this.testimonial, firstClone];
  }

  public arrowNext(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.currentActiveIndex++;
    this.dotIndicator = (this.dotIndicator + 1) % this.testimonial.length;
    this.handleAnimationTiming();
  }

  public arrowBack(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.currentActiveIndex--;
    this.dotIndicator = this.dotIndicator === 0 ? this.testimonial.length - 1 : this.dotIndicator - 1;
    this.handleAnimationTiming();
  }

  public jumpTo(targetIndex: number): void {
    if (this.isAnimating || this.dotIndicator === targetIndex) return;
    this.isAnimating = true;

    this.dotIndicator = targetIndex;
    this.currentActiveIndex = targetIndex + 1;
    this.handleAnimationTiming();
  }

  private handleAnimationTiming(): void {
    setTimeout(() => {
      this.verifyLoopBounds();
    }, 450);
  }

  private verifyLoopBounds(): void {
    if (this.currentActiveIndex === this.displayList.length - 1) {
      this.disableTransition = true;
      this.currentActiveIndex = 1;
    } else if (this.currentActiveIndex === 0) {
      this.disableTransition = true;
      this.currentActiveIndex = this.displayList.length - 2;
    }

    setTimeout(() => {
      this.disableTransition = false;
      this.isAnimating = false;
    }, 50);
  }

 public getTrackOffset(): string {
    const centerOfTrack = (this.displayList.length - 1) / 2;
    const shiftSteps = centerOfTrack - this.currentActiveIndex;
    
    return `translateX(calc(${shiftSteps} * (var(--card-width) + var(--card-gap))))`;
  }
}
