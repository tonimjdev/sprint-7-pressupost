import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent {
  // Formulari reactiu validators (minim 1 pag 1 idioma)
  panellFormulari: FormGroup = this.fb.group({
    pagControl: [0, [Validators.required, Validators.min(1)]],
    idiomaControl: [0, [Validators.required, Validators.min(1)]],
  });
  // Missatge error a l'HTML si no passa validació
  campEsValid(campo: string) {
    return this.panellFormulari.controls[campo].errors;
  }
  pagines: number = 1;
  idiomes: number = 1;
  totalOpcionsWeb: number = 0;

  // Injectem el servei pressupost
  constructor(
    public pressupostService: PressupostService,
    private fb: FormBuilder
  ) {}

  // Mètode que retorna el Total Opcions Web utilitzant el servei
  totalWebOpcions() {
    this.pagines = Number(this.panellFormulari.get('pagControl')?.value);
    this.idiomes = Number(this.panellFormulari.get('idiomaControl')?.value);
    if (this.pagines < 1 || this.idiomes < 1) this.totalOpcionsWeb = 0;
    else
      this.totalOpcionsWeb = this.pressupostService.calcOpcionsWeb(
        this.pagines,
        this.idiomes
      );
  }

  // Enviem Total Opcions Web al component pare "Home" amb @Output
  @Output()
  propagar = new EventEmitter<number>();
  onPropagar() {
    this.propagar.emit(this.totalOpcionsWeb);
  }
}
