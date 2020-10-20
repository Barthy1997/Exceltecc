import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Produit } from './../models/produit';
import { Actualité } from '../models/Actualité';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

 url:'http://localhost:4201/getProduct'
list
  constructor(private httpClient: HttpClient) { }

getProduitAll() {
    
    return this.httpClient.get<{message:string, product:Produit}>('http://localhost:4201/getProduct');  
  }
  
Panier(id:string)
{
  const httpOptions = {
    headers: new HttpHeaders({
    })
  };
  return this.httpClient.get<{message:string,products:any}>('http://localhost:4201/Panier'+`/${id}`)
}
ajoutProduit(Produit: Produit)
{
  return this.httpClient.post<{Produit:Produit}>('http://localhost:4201/ajoutProduit',Produit); 
}
deleteProduit(id:string)
{
  console.log(id);
  const httpOptions = {
    headers: new HttpHeaders({
    })
  };
  return this.httpClient.delete<{Produit:any}>('http://localhost:4201/Delete/'+id);
  
}
SupprimerCommandeProduit(id)
{
  return this.httpClient.delete<{Produit:Produit}>('http://localhost:4201/deleteCommande'+`/${id}`); 
}
modifierProduit(id)
{
  //return this.httpClient.put<{}>('http://localhost:4201/modifierProduit'+`/${id}`); 
}
ajouterCommande(commande:any)
{
  return this.httpClient.post<{commande:any}>('http://localhost:4201/ajoutCommande',commande);
}

}

