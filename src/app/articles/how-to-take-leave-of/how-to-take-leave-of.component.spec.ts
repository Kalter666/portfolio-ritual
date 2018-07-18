import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToTakeLeaveOfComponent } from './how-to-take-leave-of.component';

describe('HowToTakeLeaveOfComponent', () => {
  let component: HowToTakeLeaveOfComponent;
  let fixture: ComponentFixture<HowToTakeLeaveOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToTakeLeaveOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToTakeLeaveOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
