import { Injectable } from '@angular/core';

import { Pressupost } from '../interface/pressupost.interface';

@Injectable()
export class PressupostService {

  totalOpcionsWeb: number = 0;
  totalServeisWeb: number = 0;

  costeWeb: number = 500;
  costeSeo: number = 300;
  costeAds: number = 200;

  llistatPresusArray:Pressupost[] = [];
  

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

  arrayPresus(presuNom: any, client: any, servei: any, total:any, data:any) {
    
    let id = this.llistatPresusArray.length+1;

    this.llistatPresusArray.push({id, presuNom, client, servei, total, data});

    console.log(this.llistatPresusArray)

  }
}