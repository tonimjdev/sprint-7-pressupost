import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { variationPlacements } from '@popperjs/core';

import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  totalServicios: number = 0;
  totalWebServ: number = 0;
  totalPresu: number = 0;
  webActive: boolean = false;

  webB:boolean=false;
  seoB:boolean=false;
  adsB:boolean=false;

  // Injectem el servei pressupost
  constructor(public pressupostService: PressupostService) {}

  checkWeb(valor:any):void {
    if (valor.currentTarget.checked==false) this.totalWebServ=0; // Si quitamos check el total Servicios Web ha de ser 0
    valor.currentTarget.checked ? this.webActive=true : this.webActive=false; // Visualitzar o no component "panell"
    valor.currentTarget.checked ? this.webB=true : this.webB=false;
    this.totalServicios =  this.pressupostService.calcTotalServeis(this.webB, this.seoB, this.adsB);
    this.totalPresu = this.totalServicios+this.totalWebServ;
  }
  checkSeo(valor:any):void {
    valor.currentTarget.checked ? this.seoB=true : this.seoB=false;
    this.totalServicios =  this.pressupostService.calcTotalServeis(this.webB, this.seoB, this.adsB);
    this.totalPresu = this.totalServicios+this.totalWebServ;
  }
  checkAds(valor:any):void {
    valor.currentTarget.checked ? this.adsB=true : this.adsB=false;
    this.totalServicios =  this.pressupostService.calcTotalServeis(this.webB, this.seoB, this.adsB);
    this.totalPresu = this.totalServicios+this.totalWebServ;
  }
  onTotalWebServ(valor:any):void {
    this.totalWebServ=valor;
    console.log('Total Web Services: ', this.totalWebServ);
    this.totalPresu = this.totalServicios+this.totalWebServ;
  }
}