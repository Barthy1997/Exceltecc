import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import{Post} from 'server/models'
import { User } from './../models/User';
import { Contact } from './../models/Contact';
import { Actualité } from '../models/Actualité';

@Injectable({
  providedIn: 'root'
})
export class UserService {

url='http://localhost:4201/tsar'
  constructor(private httpClient: HttpClient) { }
Create(User:User)
  {
    return this.httpClient.post<{User:User}>('http://localhost:4201/createUser',User);
 }

Connection(id:any){
   return this.httpClient.get<{user:any}>('http://localhost:4201/Connection'+`/${id}`);
 }
Mail(Contact:Contact)
{
  return this.httpClient.post<{Contact:Contact}>('http://localhost:4201/connection',Contact);
}
createActu(Actualite:Actualité)
{
  return this.httpClient.post<{Actualite:Actualité}>('http://localhost:4201/ajoutActu',Actualite);
}
getUser()
{
  return this.httpClient.get<{user:any}>('http://localhost:4201/getUser');
}
afficherActu()
{
  return this.httpClient.get<{actu:any}>('http://localhost:4201/getActu');
}



}