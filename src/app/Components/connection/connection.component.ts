import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

FormLogin:FormGroup;
User:User;
id:any;
  constructor(private router:Router,private fb:FormBuilder,private activeRoute: ActivatedRoute,private Userservice:UserService) { 
    this.User=new User('','','','');
    this.FormLogin=this.fb.group({
      email:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(30)] ],
      
  
    });
  }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
   
  }
  Connection(){
    if(this.FormLogin!=null)
    {
      this.router.navigate(['/Admin'])
    }
  }

}
