import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdmissionComponent } from './faculty-admission.component';

describe('FacultyAdmissionComponent', () => {
  let component: FacultyAdmissionComponent;
  let fixture: ComponentFixture<FacultyAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
