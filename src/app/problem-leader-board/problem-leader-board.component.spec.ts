import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemLeaderBoardComponent } from './problem-leader-board.component';

describe('ProblemLeaderBoardComponent', () => {
  let component: ProblemLeaderBoardComponent;
  let fixture: ComponentFixture<ProblemLeaderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemLeaderBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
