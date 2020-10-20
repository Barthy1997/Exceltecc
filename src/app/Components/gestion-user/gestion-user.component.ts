import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {

  user:User;
  constructor(private UserService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.UserService.getUser().subscribe(
      data=>{
        this.user=data.user;
      }
    )
  }
  ajoutUser()
  {
    this.router.navigate(['/Admin'])
  }

}
