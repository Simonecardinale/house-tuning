import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

// const
import {ADMIN_USER_HOME_PAGE_PATHS, LOGIN_PAGE_PATH, USER_HOME_PAGE_PATHS} from "../../settings/settings";

// components
import {HomePageComponent} from "../user/home-page/home-page.component";
import {ElencoGameComponent} from "../user/elenco-game/elenco-game.component";
import {StoricoComponent} from "../user/storico/storico.component";
import {CreaGameComponent} from "../user/crea-game/crea-game.component";
import {AuthGuard} from "../services/guards/auth.guard";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";


const routes: Routes = [
  {path: LOGIN_PAGE_PATH.login, component: LoginComponent},

  {path: USER_HOME_PAGE_PATHS.home, component: HomePageComponent, canActivate: [AuthGuard]},
  {path: USER_HOME_PAGE_PATHS.elencoGame, component: ElencoGameComponent, canActivate: [AuthGuard]},
  {path: USER_HOME_PAGE_PATHS.storico, component: StoricoComponent, canActivate: [AuthGuard]},
  {path: USER_HOME_PAGE_PATHS.creaGame, component: CreaGameComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: USER_HOME_PAGE_PATHS.home, pathMatch: 'full'},
  {path: '**', redirectTo: USER_HOME_PAGE_PATHS.home, pathMatch: 'full'},

  {path: ADMIN_USER_HOME_PAGE_PATHS.register, component: RegisterComponent},
  {path: ADMIN_USER_HOME_PAGE_PATHS.home, component: HomePageComponent, canActivate: [AuthGuard]},
  {path: ADMIN_USER_HOME_PAGE_PATHS.elencoGame, component: ElencoGameComponent, canActivate: [AuthGuard]},
  {path: ADMIN_USER_HOME_PAGE_PATHS.storico, component: StoricoComponent, canActivate: [AuthGuard]},
  {path: ADMIN_USER_HOME_PAGE_PATHS.creaGame, component: CreaGameComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: ADMIN_USER_HOME_PAGE_PATHS.home, pathMatch: 'full'},
  {path: '**', redirectTo: ADMIN_USER_HOME_PAGE_PATHS.home, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
