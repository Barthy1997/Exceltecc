import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActuListeComponent } from './gestion-actu-liste.component';

describe('GestionActuListeComponent', () => {
  let component: GestionActuListeComponent;
  let fixture: ComponentFixture<GestionActuListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionActuListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionActuListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
