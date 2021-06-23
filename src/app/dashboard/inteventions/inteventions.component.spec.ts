import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteventionsComponent } from './inteventions.component';

describe('InteventionsComponent', () => {
  let component: InteventionsComponent;
  let fixture: ComponentFixture<InteventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
