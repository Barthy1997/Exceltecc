import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracteurComponent } from './administracteur.component';

describe('AdministracteurComponent', () => {
  let component: AdministracteurComponent;
  let fixture: ComponentFixture<AdministracteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
