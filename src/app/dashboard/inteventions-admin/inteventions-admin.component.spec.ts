import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteventionsAdminComponent } from './inteventions-admin.component';

describe('InteventionsAdminComponent', () => {
  let component: InteventionsAdminComponent;
  let fixture: ComponentFixture<InteventionsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteventionsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteventionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
