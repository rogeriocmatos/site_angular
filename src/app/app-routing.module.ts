import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { NintendoComponent } from './views/nintendo/nintendo.component';
import { NovidadesComponent } from './views/novidades/novidades.component';
import { PcComponent } from './views/pc/pc.component';
import { PsComponent } from './views/ps/ps.component';
import { SwComponent } from './views/sw/sw.component';
import { XboxComponent } from './views/xbox/xbox.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'starwars',
    component: SwComponent
  },
  {
    path: 'playstation',
    component: PsComponent
  },
  {
    path: 'xbox',
    component: XboxComponent
  },
  {
    path: 'nintendo',
    component: NintendoComponent
  },
  {
    path: 'computadores',
    component: PcComponent
  },
  {
    path: 'novidades',
    component: NovidadesComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
