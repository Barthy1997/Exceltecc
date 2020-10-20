import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceltraceComponent } from './exceltrace.component';

describe('ExceltraceComponent', () => {
  let component: ExceltraceComponent;
  let fixture: ComponentFixture<ExceltraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceltraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceltraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
