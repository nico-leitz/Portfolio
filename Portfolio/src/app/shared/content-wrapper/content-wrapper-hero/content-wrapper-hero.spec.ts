import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWrapperHero } from './content-wrapper-hero';

describe('ContentWrapperHero', () => {
  let component: ContentWrapperHero;
  let fixture: ComponentFixture<ContentWrapperHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentWrapperHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentWrapperHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
