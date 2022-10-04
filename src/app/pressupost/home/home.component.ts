import { Component } from '@angular/core';

import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  totalServicios: number = 0;
  totalWebServ: number = 0;
  totalPresu: number = 0;
  webActive: boolean = false;

  webB: boolean = false;
  seoB: boolean = false;
  adsB: boolean = false;

  // Injectem el servei pressupost
  constructor(public pressupostService: PressupostService) {}

  totalFunc() {
    this.totalServicios = this.pressupostService.calcTotalServeis(
      this.webB,
      this.seoB,
      this.adsB
    ); // Crida Servei
    this.totalPresu = this.totalServicios + this.totalWebServ;
  }

  checkWeb(valor: any): void {
    // Si quitamos check el total Servicios Web ha de ser 0
    if (valor.currentTarget.checked == false) this.totalWebServ = 0; 
    valor.currentTarget.checked
      ? (this.webActive = true)
      : (this.webActive = false); // Visualitzar o no component "panell"
    valor.currentTarget.checked ? (this.webB = true) : (this.webB = false);
    this.totalFunc();
  }
  checkSeo(valor: any): void {
    valor.currentTarget.checked ? (this.seoB = true) : (this.seoB = false);
    this.totalFunc();
  }
  checkAds(valor: any): void {
    valor.currentTarget.checked ? (this.adsB = true) : (this.adsB = false);
    this.totalFunc();
  }
  onTotalWebServ(valor: any): void {
    this.totalWebServ = valor;
    this.totalPresu = this.totalServicios + this.totalWebServ;
  }
}
