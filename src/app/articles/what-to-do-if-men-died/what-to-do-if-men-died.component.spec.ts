import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToDoIfMenDiedComponent } from './what-to-do-if-men-died.component';

describe('WhatToDoIfMenDiedComponent', () => {
  let component: WhatToDoIfMenDiedComponent;
  let fixture: ComponentFixture<WhatToDoIfMenDiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatToDoIfMenDiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToDoIfMenDiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
