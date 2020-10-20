import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaabaniComponent } from './taabani.component';

describe('TaabaniComponent', () => {
  let component: TaabaniComponent;
  let fixture: ComponentFixture<TaabaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaabaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaabaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
