import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson41Component } from './lesson41.component';

describe('Lesson41Component', () => {
  let component: Lesson41Component;
  let fixture: ComponentFixture<Lesson41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
