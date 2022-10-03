import { Component } from '@angular/core';

import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent {
  pagines: number = 0;
  idiomes: number = 0;

  constructor(public pressupostService: PressupostService) {}

  totalWebOpcions(pagines: number, idiomes: number) {
    console.log(this.pressupostService.calcOpcionsWeb(pagines, idiomes));
  }
}
