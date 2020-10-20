import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produit } from './../../models/produit';
import { ProduitService } from './../../services/produit.service';

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {

age:any;
id:any;
Produit:Produit;
  constructor(private Router:Router, private activeRoute: ActivatedRoute,private ProduitService:ProduitService) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
  }

Panier(id)
{
  this.Router.navigate([`/Panier/${id}`]);
  

}


}


