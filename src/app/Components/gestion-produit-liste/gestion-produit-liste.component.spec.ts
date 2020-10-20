import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitListeComponent } from './gestion-produit-liste.component';

describe('GestionProduitListeComponent', () => {
  let component: GestionProduitListeComponent;
  let fixture: ComponentFixture<GestionProduitListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProduitListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProduitListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
