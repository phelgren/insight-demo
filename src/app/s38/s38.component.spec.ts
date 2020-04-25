import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S38Component } from './s38.component';

describe('S38Component', () => {
  let component: S38Component;
  let fixture: ComponentFixture<S38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
