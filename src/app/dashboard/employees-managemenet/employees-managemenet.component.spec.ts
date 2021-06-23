import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesManagemenetComponent } from './employees-managemenet.component';

describe('EmployeesManagemenetComponent', () => {
  let component: EmployeesManagemenetComponent;
  let fixture: ComponentFixture<EmployeesManagemenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesManagemenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesManagemenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
