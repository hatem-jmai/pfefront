import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotemissionComponent } from './modules/notemission/notemission.component';
import { FicheRenseignementComponent } from './modules/fiche-renseignement/fiche-renseignement.component';
import { BorderouComponent } from './modules/borderou/borderou.component';
import { RappelRapportComponent } from './modules/rappel-rapport/rappel-rapport.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotemissionComponent,
    FicheRenseignementComponent,
    BorderouComponent,
    RappelRapportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
