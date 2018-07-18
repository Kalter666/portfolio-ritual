import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraniteMonumentsComponent } from './granite-monuments.component';

describe('GraniteMonumentsComponent', () => {
  let component: GraniteMonumentsComponent;
  let fixture: ComponentFixture<GraniteMonumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraniteMonumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraniteMonumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
