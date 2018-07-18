import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeOrganisationComponent } from './wake-organisation.component';

describe('WakeOrganisationComponent', () => {
  let component: WakeOrganisationComponent;
  let fixture: ComponentFixture<WakeOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
