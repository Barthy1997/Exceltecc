import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaviewComponent } from './reaview.component';

describe('ReaviewComponent', () => {
  let component: ReaviewComponent;
  let fixture: ComponentFixture<ReaviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
