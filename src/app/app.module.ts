import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { app_routing } from './app.routes';
import { NosotrosComponent } from './trabaja-nosotros/nosotros.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ComercioComponent } from './comercio/comercio.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, app_routing ],
  declarations: [ AppComponent, HomeComponent, NosotrosComponent, UbicacionComponent, ComercioComponent, ContactoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
