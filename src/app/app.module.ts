import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pressupost/home/home.component';
import { PanellComponent } from './pressupost/panell/panell.component';

import { PressupostService } from './pressupost/services/pressupost.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
   PressupostService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
