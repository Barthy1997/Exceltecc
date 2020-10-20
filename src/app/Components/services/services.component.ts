import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  message="reussite";
  Produit:any;
  id:any;
  constructor(private toastr:ToastrService,private produitService:ProduitService,private activeRoute:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    this.produitService.getProduitAll().subscribe(
      data=>{
        this.Produit=data.product;
      }
    )
    //this.toastr.success("message",positionClass: 'toast-top-right');
  }
Panier(id)
{
  this.Router.navigate([`/Panier/${id}`]);
  
  
}

}
