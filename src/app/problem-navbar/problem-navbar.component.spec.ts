import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemNavbarComponent } from './problem-navbar.component';

describe('ProblemNavbarComponent', () => {
  let component: ProblemNavbarComponent;
  let fixture: ComponentFixture<ProblemNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
