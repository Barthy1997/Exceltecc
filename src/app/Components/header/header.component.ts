import { Component, OnInit, Version } from '@angular/core';
import { ProduitService } from './../../services/produit.service';
import { ProduitComponent } from './../produit/produit.component';
import { Router, RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { Produit } from './../../models/produit';
import { HttpClient } from '@angular/common/http';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { User } from './../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProduitService: ProduitService, private router: Router, private activeRoute: ActivatedRoute) { }


  user: User = {
    nom: "Moussavou",
    email: "Barthy",
    password: "Barthy25jeriel",
    Confirpwd: "barthyhytwxgs",
  };
  users: User[];

  pom: any;
  submit = false;
  ngOnInit(): void {
  }
  afficher() {
    this.router.navigate(['products']);
  }

  methode() {

  }
}
