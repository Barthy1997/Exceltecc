import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcleteccComponent } from './excletecc.component';

describe('ExcleteccComponent', () => {
  let component: ExcleteccComponent;
  let fixture: ComponentFixture<ExcleteccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcleteccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcleteccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
