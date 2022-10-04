import { Component, Output, EventEmitter } from '@angular/core';

import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent {
  pagines: number = 0;
  idiomes: number = 0;
  totalOpcionsWeb: number = 0;

  // Injectem el servei pressupost
  constructor(public pressupostService: PressupostService) {} 

  // Mètode que retorna el Total Opcions Web utilitzant el servei
  totalWebOpcions(pagines: number, idiomes: number) {
    this.totalOpcionsWeb = this.pressupostService.calcOpcionsWeb(pagines, idiomes);
  }

  // Enviem Total Opcions Web al component pare "Home" amb @Output
  @Output()
  propagar = new EventEmitter<number>();
  onPropagar() {
  this.propagar.emit(this.totalOpcionsWeb);
  }
  
}