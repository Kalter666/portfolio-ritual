import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitualTransportationComponent } from './ritual-transportation.component';

describe('RitualTransportationComponent', () => {
  let component: RitualTransportationComponent;
  let fixture: ComponentFixture<RitualTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitualTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitualTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
