import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pressupost/home/home.component';
import { PanellComponent } from './pressupost/panell/panell.component';

import { PressupostService } from './pressupost/services/pressupost.service';
import { BenvingudaComponent } from './pressupost/benvinguda/benvinguda.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    BenvingudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   PressupostService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
