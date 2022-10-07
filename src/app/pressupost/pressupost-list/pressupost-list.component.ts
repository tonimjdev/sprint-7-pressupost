import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html'
})
export class PressupostListComponent implements OnInit {

  constructor(
    public pressupostService: PressupostService
  ) { }

  ngOnInit(): void {
    this.pressupostService.getFormLocalStorage('llistat');
  }

  get pressupostosLlistat() {
    return this.pressupostService.llistatPresusArray;
  }

  esborrarPresu(index: number) {
    this.pressupostosLlistat.splice(index,1);
    console.log(this.pressupostosLlistat);
  }
}
