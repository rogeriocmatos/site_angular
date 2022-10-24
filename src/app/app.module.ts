import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { PsComponent } from './views/ps/ps.component';
import { SwComponent } from './views/sw/sw.component';
import { XboxComponent } from './views/xbox/xbox.component';
import { NintendoComponent } from './views/nintendo/nintendo.component';
import { PcComponent } from './views/pc/pc.component';
import { NovidadesComponent } from './views/novidades/novidades.component';
import { ContatoComponent } from './views/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PsComponent,
    SwComponent,
    XboxComponent,
    NintendoComponent,
    PcComponent,
    NovidadesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
