import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActuComponent } from './gestion-actu.component';

describe('GestionActuComponent', () => {
  let component: GestionActuComponent;
  let fixture: ComponentFixture<GestionActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
