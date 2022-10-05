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
    pagControl: [1, [Validators.required, Validators.min(1)]],
    idiomaControl: [1, [Validators.required, Validators.min(1)]],
  });

  // Missatge error a l'HTML si no passa validació
  campEsValid(campo: string) {
    return this.panellFormulari.controls[campo].errors;
  }

  // Variables
  pagines: number = 0;
  idiomes: number = 0;
  totalOpcionsWeb: number = 0;

  // Injectem el servei pressupost al constructor
  constructor(
    public pressupostService: PressupostService,
    private fb: FormBuilder
  ) {}

  cridarServeiOpcionsWeb() {
    if (this.pagines < 1 || this.idiomes < 1) this.totalOpcionsWeb = 0;
    else {
      this.totalOpcionsWeb = this.pressupostService.calcOpcionsWeb(
        this.pagines,
        this.idiomes
      );
    }
  }

  // Mètode que retorna el Total Opcions Web utilitzant el servei
  totalWebOpcions() {
    this.pagines = Number(this.panellFormulari.get('pagControl')?.value);
    this.idiomes = Number(this.panellFormulari.get('idiomaControl')?.value);
    this.cridarServeiOpcionsWeb();
  }

  // Enviem Total Opcions Web al component pare "Home" amb @Output
  @Output()
  propagar = new EventEmitter<number>();
  onPropagar() {
    this.propagar.emit(this.totalOpcionsWeb);
  }

  // Operar amb botons
  sumar(servei: string) {
    servei === 'pagines' ? this.pagines++ : this.idiomes++;

    this.cridarServeiOpcionsWeb();
    this.onPropagar();
  }
  restar(servei: string) {
    servei === 'pagines' ? this.pagines-- : this.idiomes--;

    this.cridarServeiOpcionsWeb();
    this.onPropagar();
  }
}
