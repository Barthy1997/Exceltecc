import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ExceltraceComponent } from './Components/exceltrace/exceltrace.component';
import { SmartretroviseurComponent } from './Components/smartretroviseur/smartretroviseur.component';
import { ServicesComponent } from './Components/services/services.component';
import { ExceltracerComponent } from './Components/exceltracer/exceltracer.component';
import { TaabaniComponent } from './Components/taabani/taabani.component';
import { RfidComponent } from './Components/rfid/rfid.component';
import { TaxibibiComponent } from './Components/taxibibi/taxibibi.component';
import { ReaviewComponent } from './Components/reaview/reaview.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ActualiteComponent } from './Components/actualite/actualite.component';
import { ProduitComponent } from './Components/produit/produit.component';
import { ConnectionComponent } from './Components/connection/connection.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Components/post/post.component';
import { PanierComponent } from './Components/panier/panier.component';
import {  FormsModule, ReactiveFormsModule}from "@angular/forms";
import { from } from 'rxjs';
import { AdministracteurComponent } from './Components/administracteur/administracteur.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { ProductsComponent } from './Components/products/products.component';
import { GestionActuComponent } from './Components/gestion-actu/gestion-actu.component';
import { GestionProduitComponent } from './Components/gestion-produit/gestion-produit.component';
import { GestionProduitListeComponent } from './Components/gestion-produit-liste/gestion-produit-liste.component';
import { GestionActuListeComponent } from './Components/gestion-actu-liste/gestion-actu-liste.component';
import { AjoutCommandeComponent } from './Components/ajout-commande/ajout-commande.component';
import { ExcleteccComponent } from './Components/excletecc/excletecc.component';
import { CommandeComponent } from './Components/commande/commande.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExceltraceComponent,
    SmartretroviseurComponent,
    ServicesComponent,
    ExceltracerComponent,
    TaabaniComponent,
    RfidComponent,
    TaxibibiComponent,
    ReaviewComponent,
    HomeComponent,
    ContactComponent,
    ActualiteComponent,
    ProduitComponent,
    ConnectionComponent,
    PostComponent,
    PanierComponent,
    AdministracteurComponent,
    InscriptionComponent,
    ProductsComponent,
    GestionActuComponent,
    GestionProduitComponent,
    GestionProduitListeComponent,
    GestionActuListeComponent,
    AjoutCommandeComponent,
    ExcleteccComponent,
    CommandeComponent,
    GestionUserComponent
    
  ],
  imports: [
 
 HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  ToastrModule.forRoot(
    {}
    
  )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
