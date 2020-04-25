import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmiComponent } from './ibmi.component';

describe('IbmiComponent', () => {
  let component: IbmiComponent;
  let fixture: ComponentFixture<IbmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
