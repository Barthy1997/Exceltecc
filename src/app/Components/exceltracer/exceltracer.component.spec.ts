import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceltracerComponent } from './exceltracer.component';

describe('ExceltracerComponent', () => {
  let component: ExceltracerComponent;
  let fixture: ComponentFixture<ExceltracerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceltracerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceltracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
