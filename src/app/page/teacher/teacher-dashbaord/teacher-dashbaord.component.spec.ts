import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashbaordComponent } from './teacher-dashbaord.component';

describe('TeacherDashbaordComponent', () => {
  let component: TeacherDashbaordComponent;
  let fixture: ComponentFixture<TeacherDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherDashbaordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
