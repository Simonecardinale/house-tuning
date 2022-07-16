import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElencoGameComponent } from './user/elenco-game/elenco-game.component';
import { StoricoComponent } from './user/storico/storico.component';
import { CreaGameComponent } from './user/crea-game/crea-game.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import {AppRoutingModule} from "./modules/routing.module";
import {AngularMaterialModule} from "./modules/angular-material.module";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoGameComponent,
    StoricoComponent,
    CreaGameComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
