import { Component, viewChild, signal, afterNextRender, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  aboutImage = viewChild<ElementRef>('aboutImage');
  imageVisible = signal(false);

  constructor() {
    afterNextRender(() => {
      const element = this.aboutImage()?.nativeElement;
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.imageVisible.set(true);
          observer.disconnect();
        }
      }, { threshold: 0.1 });

      observer.observe(element);
    });
  }
}