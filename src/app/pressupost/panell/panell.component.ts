import { Component, Output, Input, EventEmitter } from '@angular/core';
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

  // Importem del component pare el valor "faltenDades" per mostrar o no missatge d'error al panell
  @Input('checkSub') faltenDades!: boolean;

  // Missatge error a l'HTML si no passa validació
  campEsValid(campo: string) {
    return this.panellFormulari.controls[campo].errors;
  }

  // Variables
  pagines: number = 0;
  idiomes: number = 0;
  totalOpcionsWeb: number = 0;
  checkValid: boolean = false;

  // Injectem el servei pressupost & FormBuilder al constructor
  constructor(
    public pressupostService: PressupostService,
    private fb: FormBuilder
  ) {}

  cridarServeiOpcionsWeb() {
    if (this.pagines < 1 || this.idiomes < 1) {
      this.totalOpcionsWeb = 0;
      this.checkValid = false;
    } else {
      this.totalOpcionsWeb = this.pressupostService.calcOpcionsWeb(
        this.pagines,
        this.idiomes
      );
      this.checkValid = true;
    }
    console.log('Checkvalid', this.checkValid);
  }

  // Mètode que retorna el Total Opcions Web utilitzant el servei
  totalWebOpcions() {
    this.pagines = Number(this.panellFormulari.get('pagControl')?.value);
    this.idiomes = Number(this.panellFormulari.get('idiomaControl')?.value);
    this.cridarServeiOpcionsWeb();
  }

  // Enviem Total Opcions Web & Validacio del Form al component pare "Home" amb @Output
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
