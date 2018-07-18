import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbamblingComponent } from './embambling.component';

describe('EmbamblingComponent', () => {
  let component: EmbamblingComponent;
  let fixture: ComponentFixture<EmbamblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbamblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbamblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
