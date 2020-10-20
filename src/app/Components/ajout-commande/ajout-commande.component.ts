import { Component, OnInit } from '@angular/core';
import { ProduitService } from './../../services/produit.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande:any;
  constructor(private ProduitService:ProduitService) { }

  ngOnInit(): void {


  }

}
