import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Actualité} from './../../models/Actualité';
import { ProduitService } from './../../services/produit.service';

@Component({
  selector: 'app-gestion-actu',
  templateUrl: './gestion-actu.component.html',
  styleUrls: ['./gestion-actu.component.css']
})
export class GestionActuComponent implements OnInit {

  FormActu:FormGroup;
  Actualite:Actualité;

  constructor(private Router:Router,private fb:FormBuilder,private UserService:UserService,private ActivatedRoute:ActivatedRoute ) {
    this.Actualite=new Actualité('','');
    this.FormActu=this.fb.group({
      titre:['',Validators.required],
      contenue:['',Validators.required],
     })
   }

  ngOnInit(): void {
  }
  saveActu()
  {
    this.UserService.createActu(this.FormActu.value).subscribe(
      data=>{
     
    })
    this.Router.navigate([`/Admin`])
  }

}
