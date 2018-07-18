import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraveCareComponent } from './grave-care.component';

describe('GraveCareComponent', () => {
  let component: GraveCareComponent;
  let fixture: ComponentFixture<GraveCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraveCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
