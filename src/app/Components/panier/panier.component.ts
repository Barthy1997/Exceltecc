import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './../../services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
id:any;
Produit:any;
  constructor(private Router:Router, private activeRoute: ActivatedRoute,private ProduitService:ProduitService) { }

  ngOnInit(): void 
  {
    this.id=this.activeRoute.snapshot.paramMap.get('id');

    this.ProduitService.Panier(this.id).subscribe(
      data=>{
      this.Produit=data.products;
      this.Produit=Array.of(this.Produit);

    }
    )
  }
  supprimer(id)
{
  
 this.ProduitService.deleteProduit(id).subscribe(
   ()=>{
     this.ProduitService.getProduitAll().subscribe(
    data=>{
     this.Produit=data.product;
   })

   }

 )
  
}
Commande(prix)
{
  
  this.ProduitService.Panier(this.id).subscribe(
    data=>{
    this.Produit=data.products;
    this.Produit=Array.of(this.Produit).values();
    this.Produit;

  }
  )
  console.log(this.Produit);
  this.Router.navigate([``]);
}
Retour()
{
  this.Router.navigate([``]);
}

}
