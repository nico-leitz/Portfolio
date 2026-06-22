import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectsDialog } from './featured-projects-dialog';

describe('FeaturedProjectsDialog', () => {
  let component: FeaturedProjectsDialog;
  let fixture: ComponentFixture<FeaturedProjectsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
