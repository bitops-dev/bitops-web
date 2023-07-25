import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyLandingComponent } from './academy-landing.component';

describe('AcademyLandingComponent', () => {
  let component: AcademyLandingComponent;
  let fixture: ComponentFixture<AcademyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
