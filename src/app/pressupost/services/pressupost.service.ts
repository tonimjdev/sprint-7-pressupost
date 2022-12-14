import { Injectable } from '@angular/core';

import { Pressupost } from '../interface/pressupost.interface';

@Injectable()
export class PressupostService {
  // Declarem variables
  totalOpcionsWeb: number = 0;
  totalServeisWeb: number = 0;

  costeWeb: number = 500;
  costeSeo: number = 300;
  costeAds: number = 200;

  contadorID: number = 0;

  // Declarem array amb 2 presupostos d'exemple
  llistatPresusArray: Pressupost[] = [];

  // Mètode que retorna total opcions web
  calcOpcionsWeb(pages: number, languages: number): number {
    this.totalOpcionsWeb = (pages + languages) * 30;
    return this.totalOpcionsWeb;
  }

  // Mètode que retorna total serveis pressupostats
  calcTotalServeis(web: boolean, seo: boolean, ads: boolean) {
    let acumulado: number = 0;
    web ? (acumulado += this.costeWeb) : (acumulado += 0);
    seo ? (acumulado += this.costeSeo) : (acumulado += 0);
    ads ? (acumulado += this.costeAds) : (acumulado += 0);
    this.totalServeisWeb = acumulado;
    return this.totalServeisWeb;
  }

  // Afegir pressupost al llistat de pressupostos
  arrayPresus(presuNom: any, client: any, servei: any, total: any, data: any) {
    // Agagfem l'id amb el comptador
    let id = this.contadorID + 1;
    this.contadorID += 1;
    // Fem push
    this.llistatPresusArray.push({ id, presuNom, client, servei, total, data });
    console.log(this.llistatPresusArray);
    // Enviem al localStorage del navegador
    this.saveToLocalStorage(this.llistatPresusArray);
  }

  // Guardar Presu al localStorage del navegador
  saveToLocalStorage(llistat: Pressupost[]) {
    localStorage.setItem('llistat', JSON.stringify(llistat));
  }

  // Si hi han dades, fer GET de les dades del localStorage
  getFromLocalStorage(key: string) {
    //if (!localStorage.getItem(key)) return;
    this.llistatPresusArray = JSON.parse(localStorage.getItem(key)!);
  }

  // Ordre A-Z (Pressupost)
  ordreAZ() {
    this.llistatPresusArray.sort((a, b) => {
      if (a.presuNom.toLowerCase() < b.presuNom.toLowerCase()) {
        return -1;
      } else if (a.presuNom.toLocaleLowerCase() > b.presuNom.toLowerCase()) {
        return 1;
      } else return 0;
    });
  }
  // Ordre Data
  ordreData() {
    this.llistatPresusArray.sort((a, b) => {
      if (a.data < b.data) {
        return -1;
      } else if (a.data > b.data) {
        return 1;
      } else return 0;
    });
  }
  // Restaurar Ordre per ID
  resetOrdre() {
    this.llistatPresusArray.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else return 0;
    });
  }
}
