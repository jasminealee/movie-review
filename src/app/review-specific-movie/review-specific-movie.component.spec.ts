import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSpecificMovieComponent } from './review-specific-movie.component';

describe('ReviewSpecificMovieComponent', () => {
  let component: ReviewSpecificMovieComponent;
  let fixture: ComponentFixture<ReviewSpecificMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSpecificMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSpecificMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
