import { Component, OnInit } from '@angular/core';
import { ProduitService } from './../../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-produit-liste',
  templateUrl: './gestion-produit-liste.component.html',
  styleUrls: ['./gestion-produit-liste.component.css']
})
export class GestionProduitListeComponent implements OnInit {

  Produit:any;
  constructor(private produitService:ProduitService,private Router:Router) { }

  ngOnInit(): void {
    this.produitService.getProduitAll().subscribe(
      data=>{
        this.Produit=data.product;
        console.log("barthy",data.product);
      });
  }
Panier(id)
{
  this.Router.navigate([`/listProduit/${id}`])
  this.produitService.deleteProduit(id).subscribe(
    data=>{
      this.Produit=data.Produit;
         
    }
  )
}
ajoutProduit()
{
  this.Router.navigate([`/ajoutProduit`])
}

}
