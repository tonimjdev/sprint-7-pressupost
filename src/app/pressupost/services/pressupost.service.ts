import { Injectable } from '@angular/core';


@Injectable()
export class PressupostService {

  totalOpcionsWeb: number = 0;
  totalServeisWeb: number = 0;

  costeWeb: number = 500;
  costeSeo: number = 300;
  costeAds: number = 200;
  

  calcOpcionsWeb(pages: number, languages: number): number {
    this.totalOpcionsWeb = (pages + languages) * 30;
    return this.totalOpcionsWeb;
  }

  calcTotalServeis(web:boolean, seo:boolean, ads:boolean){
    let acumulado: number = 0;
    web ? acumulado+=this.costeWeb : acumulado+=0;
    seo ? acumulado+=this.costeSeo : acumulado+=0;
    ads ? acumulado+=this.costeAds : acumulado+=0;
    this.totalServeisWeb = acumulado;
    return this.totalServeisWeb;
  }
}