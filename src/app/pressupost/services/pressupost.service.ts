import { Injectable } from '@angular/core';

import { Pressupost } from '../interface/pressupost.interface';

@Injectable()
export class PressupostService {

  // Declarem variables y array
  totalOpcionsWeb: number = 0;
  totalServeisWeb: number = 0;

  costeWeb: number = 500;
  costeSeo: number = 300;
  costeAds: number = 200;

  llistatPresusArray:Pressupost[] = [];
  
  // Mètode que retorna total opcions web
  calcOpcionsWeb(pages: number, languages: number): number {
    this.totalOpcionsWeb = (pages + languages) * 30;
    return this.totalOpcionsWeb;
  }

  // Mètode que retorna total serveis pressupostats
  calcTotalServeis(web:boolean, seo:boolean, ads:boolean){
    let acumulado: number = 0;
    web ? acumulado+=this.costeWeb : acumulado+=0;
    seo ? acumulado+=this.costeSeo : acumulado+=0;
    ads ? acumulado+=this.costeAds : acumulado+=0;
    this.totalServeisWeb = acumulado;
    return this.totalServeisWeb;
  }

  // Afegir pressupost al llistat de pressupostos
  arrayPresus(presuNom: any, client: any, servei: any, total:any, data:any) {
    // Agagfem l'id
    let id = this.llistatPresusArray.length+1;
    // Fem push
    this.llistatPresusArray.push({id, presuNom, client, servei, total, data});
    console.log(this.llistatPresusArray)
    // Enviem al localStorage del navegador
    this.saveToLocalStorage(this.llistatPresusArray);
  }

  // Guardar Presu al localStorage del navegador
  saveToLocalStorage(llistat: Pressupost[]) {
    localStorage.setItem('llistat', JSON.stringify(llistat))
  }
  
  // Si hi han dades, fer GET de les dades del localStorage
  getFormLocalStorage(key: string) {
    if (!localStorage.getItem(key)) return;
    JSON.parse(localStorage.getItem(key)!);
  }
}