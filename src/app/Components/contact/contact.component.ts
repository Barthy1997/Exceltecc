import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Contact } from './../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormContact:FormGroup;
  Contact:Contact;
  constructor(private router:Router,private fb:FormBuilder,private activeRoute: ActivatedRoute,private Userservice:UserService) 
{
  this.Contact=new Contact('','','','');
  this.FormContact=this.fb.group({
    nom:['',Validators.required],
    email:['',Validators.required],
    sujet:['',[Validators.required,Validators.minLength(30)] ],
    message:['',[Validators.required,Validators.minLength(30)] ]

  });

}
  ngOnInit(): void {
  }

  Envoyer(){
    console.log(this.FormContact.value.message);

  }

}
