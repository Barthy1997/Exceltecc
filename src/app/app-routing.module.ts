import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceltracerComponent } from './Components/exceltracer/exceltracer.component';
import { RfidComponent } from './Components/rfid/rfid.component';
import { HomeComponent } from './Components/home/home.component';
import { ReaviewComponent } from './Components/reaview/reaview.component';
import { TaabaniComponent } from './Components/taabani/taabani.component';
import { ProduitComponent } from './Components/produit/produit.component';
import { TaxibibiComponent } from './Components/taxibibi/taxibibi.component';
import { ConnectionComponent } from './Components/connection/connection.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ExceltraceComponent } from './Components/exceltrace/exceltrace.component';
import { PanierComponent } from './Components/panier/panier.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { GestionActuComponent } from './Components/gestion-actu/gestion-actu.component';
import { ProductsComponent } from './Components/products/products.component';
import { GestionProduitListeComponent } from './Components/gestion-produit-liste/gestion-produit-liste.component';
import { GestionProduitComponent } from './Components/gestion-produit/gestion-produit.component';
import { GestionActuListeComponent } from './Components/gestion-actu-liste/gestion-actu-liste.component';
import { AdministracteurComponent } from './Components/administracteur/administracteur.component';
import { ExcleteccComponent } from './Components/excletecc/excletecc.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'Exceltec', component: ExceltracerComponent },
  { path: 'Inscription', component: InscriptionComponent },
  { path: 'Panier/:id', component: PanierComponent },
  { path: 'Exceltecc', component: ExcleteccComponent },
  { path: 'RFID', component: RfidComponent },
  { path: 'Excletracer', component: ExceltracerComponent },
  { path: 'Taxibibi', component: TaxibibiComponent },
  { path: 'GestionActu', component:GestionActuComponent},
  { path: 'GestionActuListe', component:GestionActuListeComponent},
  { path: 'listeActu', component:GestionActuListeComponent},
  { path: 'Tabaani', component:TaabaniComponent},
  { path: 'listProduit/:id', component: GestionProduitListeComponent },
  { path: 'Reaview', component: ReaviewComponent },
  { path: 'Connection/:id', component: ConnectionComponent },//canActivate:[AuthGuardGuard]/},
  { path: 'Contact', component: ContactComponent },
  { path: 'GestionUser', component: GestionUserComponent },
  { path: 'ajoutProduit', component: GestionProduitComponent},
  { path: 'Admin', component: AdministracteurComponent},
  { path: 'Produit', component: ProduitComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


















  exports: [RouterModule]
})
export class AppRoutingModule { }
