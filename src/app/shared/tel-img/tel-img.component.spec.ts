import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelImgComponent } from './tel-img.component';

describe('TelImgComponent', () => {
  let component: TelImgComponent;
  let fixture: ComponentFixture<TelImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
