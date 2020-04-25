import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S36Component } from './s36.component';

describe('S36Component', () => {
  let component: S36Component;
  let fixture: ComponentFixture<S36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
