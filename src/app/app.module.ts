import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticleComponent } from './article/article.component';
import { EmployeeComponent } from './employee/employee.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DepenseComponent } from './depense/depense.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { VersementComponent } from './versement/versement.component';
import { ApprovisionnementComponent } from './approvisionnement/approvisionnement.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { VenteComponent } from './vente/vente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FournisseurComponent,
    CategorieComponent,
    ArticleComponent,
    EmployeeComponent,
    UtilisateurComponent,
    DepenseComponent,
    BoutiqueComponent,
    VersementComponent,
    ApprovisionnementComponent,
    CommandeClientComponent,
    CommandeFournisseurComponent,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
