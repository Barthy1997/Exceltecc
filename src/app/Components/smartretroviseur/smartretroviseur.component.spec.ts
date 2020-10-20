import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartretroviseurComponent } from './smartretroviseur.component';

describe('SmartretroviseurComponent', () => {
  let component: SmartretroviseurComponent;
  let fixture: ComponentFixture<SmartretroviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartretroviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartretroviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
