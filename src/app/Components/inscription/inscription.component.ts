import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from './../../services/produit.service';
import { User } from './../../models/User';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  FormUser:FormGroup;
  User:User;
 
  constructor(private router:Router,private fb:FormBuilder,private activeRoute: ActivatedRoute,private Userservice:UserService)
   { 
    this.User=new User('','','','');
    this.FormUser=this.fb.group({
      nom:['',Validators.required],
      email:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(30)] ],
      Confirpwd:['',[Validators.required,Validators.minLength(30)] ]
  
    });

    
    }
  

  ngOnInit(): void {
  
   
  }
  save()
  {
    console.log(this.FormUser.value);
    this.router.navigate[('/Contact')];
    this.Userservice.Create(this.FormUser.value).subscribe(
      data=>
      {
        console.log(this.FormUser.value);
      });
    
    
  }


}
