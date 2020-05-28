import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { app_routing } from './app.routes';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, app_routing ],
  declarations: [ AppComponent, HomeComponent, NosotrosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
