import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-actu-liste',
  templateUrl: './gestion-actu-liste.component.html',
  styleUrls: ['./gestion-actu-liste.component.css']
})
export class GestionActuListeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ajoutActu()
  {
    this.router.navigate[('/GestionActu')]
  }
}
