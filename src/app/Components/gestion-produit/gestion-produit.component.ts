import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Produit } from './../../models/produit';
import { ProduitService } from './../../services/produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {

  
  FormProduit:FormGroup;
  Produit:Produit;
  constructor(private Router:Router,private fb:FormBuilder,private productService:ProduitService,private ActivatedRoute:ActivatedRoute ) { 
    this.Produit=new Produit('',0,'','');
    this.FormProduit=this.fb.group({
      nom:['',Validators.required],
      prix:['',Validators.required],
      marque:['',Validators.required],
      description:['',Validators.required], 
    })
  }

  ngOnInit(): void {
    
  }
  saveProduit()
  {
    this.productService.ajoutProduit(this.FormProduit.value).subscribe(
      data=>{
        console.log(this.FormProduit.value);
      }
      
    )
    this.Router.navigate([`/listProduit/0`]);
  }

}
