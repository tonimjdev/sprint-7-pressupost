import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
})
export class PressupostListComponent implements OnInit {
  constructor(public pressupostService: PressupostService) {}

  ngOnInit(): void {
    this.pressupostService.getFormLocalStorage('llistat');
  }

  get pressupostosLlistat() {
    return this.pressupostService.llistatPresusArray;
  }

  esborrarPresu(index: number) {
    this.pressupostosLlistat.splice(index, 1);
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
