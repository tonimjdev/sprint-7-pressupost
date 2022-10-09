import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pressupost/home/home.component';
import { PanellComponent } from './pressupost/panell/panell.component';
import { BenvingudaComponent } from './pressupost/benvinguda/benvinguda.component';
import { PressupostListComponent } from './pressupost/pressupost-list/pressupost-list.component';
import { PipeRecercaPipe } from './pressupost/pipes/pipe-recerca.pipe';
import { ModalComponent } from './pressupost/modal/modal.component';

import { PressupostService } from './pressupost/services/pressupost.service';

import { AppRoutingModule } from './app-routing.module';

// Importacions format local
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeES );


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    BenvingudaComponent,
    ModalComponent,
    PressupostListComponent,
    PipeRecercaPipe
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
