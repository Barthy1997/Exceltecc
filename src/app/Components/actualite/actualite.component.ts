import { Component, OnInit } from '@angular/core';
import { Actualité } from '../../models/Actualité';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  Actu:Actualité;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    
   this.UserService.afficherActu().subscribe(
     data=>{
     this.Actu=data.actu;
   })
  }

}
