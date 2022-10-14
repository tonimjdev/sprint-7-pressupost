import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../services/pressupost.service';


@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
})
export class PressupostListComponent implements OnInit {
  constructor(public pressupostService: PressupostService) {}
  
  // Declarem per Pipe Buscar
  filtrarPresu = '';
  
  ngOnInit(): void {
    this.pressupostService.getFromLocalStorage('llistat');
  }

  get pressupostosLlistat() {
    return this.pressupostService.llistatPresusArray;
  }

  esborrarPresu(id: number) {
    console.log('id a esborrar ', id);
    let index = this.pressupostosLlistat.map(x => x.id).indexOf(id)
    this.pressupostosLlistat.splice(index, 1);
    // Gravem nou array al LocalStorage
    this.pressupostService.saveToLocalStorage(this.pressupostosLlistat);
    console.log(this.pressupostosLlistat);
  }

  // Mètodes per ordenar llistat
  ordreAZ() {
    this.pressupostService.ordreAZ();
  }
  ordreData() {
    this.pressupostService.ordreData();
  }
  resetOrdre() {
    this.pressupostService.resetOrdre();
  }

  
}
