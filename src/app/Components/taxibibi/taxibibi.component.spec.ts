import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxibibiComponent } from './taxibibi.component';

describe('TaxibibiComponent', () => {
  let component: TaxibibiComponent;
  let fixture: ComponentFixture<TaxibibiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxibibiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxibibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
