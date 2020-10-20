import { Component, OnInit } from '@angular/core';
import { ProduitService } from './../../services/produit.service';
import { Produit } from './../../models/produit';
import { Router } from '@angular/router';
declare var M:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products:any;
  produit:Produit;
  constructor(private produitService:ProduitService,private Router:Router) { }

  ngOnInit(): void {
    
   
      this.produitService.getProduitAll().subscribe(
        data => {
          console.log("Products",data.product);
          this.products = data.product;
        });
  
      
  }
 Panier(id)
  {
    this.Router.navigate([`/products/${id}`]);
    this.produitService.Panier(id).subscribe(
      data=>{
        console.log("comment",data.products);
      })
   
   
  }
}
