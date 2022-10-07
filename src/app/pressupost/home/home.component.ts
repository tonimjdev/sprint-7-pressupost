import { Component } from '@angular/core';
// Servei
import { PressupostService } from '../services/pressupost.service';
// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  totalServicios: number = 0;
  totalWebServ: number = 0;
  totalPresu: number = 0;
  webActive: boolean = false;

  webB: boolean = false;
  seoB: boolean = false;
  adsB: boolean = false;

  // Formulari reactiu (validators per check serveis & nom/presu)
  presuClientFormulari: FormGroup = this.fb.group({
    presuForm: ['', [Validators.required, Validators.minLength(3)]],
    nomForm: ['', [Validators.required, Validators.minLength(3)]],
  });

  // Missatge error a l'HTML si no passa validació
  campEsValid(campo: string) {
    return this.presuClientFormulari.controls[campo].errors;
  }

  // Injectem el servei pressupost & FormBuilder al constructor
  constructor(
    public pressupostService: PressupostService,
    private fb: FormBuilder
  ) {}

  // Enviem submit al servei per afegir pressupost al llistat
  submitPresu() {
    const data = new Date().toLocaleDateString(); // Data registre
    let server = '';
    // Condicional per enviar el servei triat
    if (this.webB && this.seoB && this.adsB) server = 'Web - Seo - Ads';
    else if (this.webB && this.seoB) server = 'Web - Seo';
    else if (this.webB && this.adsB) server = 'Web - Ads';
    else if (this.seoB && this.adsB) server = 'Seo - Ads';
    else if (this.webB) server = 'Web';
    else if (this.seoB) server = 'Seo';
    else server = 'Ads';

    // Enviem informació al servei Pressupost un cop passa les validacions
    if (
      this.presuClientFormulari.status !== 'VALID' ||
      (this.webB && this.totalWebServ < 60) ||
      (!this.webB && !this.seoB && !this.adsB)
    )
      alert('Faltan datos');
    else
      this.pressupostService.arrayPresus(
        this.presuClientFormulari.value.presuForm,
        this.presuClientFormulari.value.nomForm,
        server,
        this.totalPresu,
        data
      );
  }

  checkWeb(valor: any): void {
    // Si quitamos check el total Servicios Web ha de ser 0
    if (valor.currentTarget.checked == false) this.totalWebServ = 0;
    valor.currentTarget.checked
      ? (this.webActive = true)
      : (this.webActive = false); // Visualitzar o no component "panell"
    valor.currentTarget.checked ? (this.webB = true) : (this.webB = false);
    this.totalFunc();
  }

  checkSeo(valor: any): void {
    valor.currentTarget.checked ? (this.seoB = true) : (this.seoB = false);
    this.totalFunc();
  }
  checkAds(valor: any): void {
    valor.currentTarget.checked ? (this.adsB = true) : (this.adsB = false);
    this.totalFunc();
  }
  onTotalWebServ(valor: any): void {
    this.totalWebServ = valor;
    this.totalPresu = this.totalServicios + this.totalWebServ;
  }
  totalFunc() {
    this.totalServicios = this.pressupostService.calcTotalServeis(
      this.webB,
      this.seoB,
      this.adsB
    ); // Crida Servei
    this.totalPresu = this.totalServicios + this.totalWebServ;
  }
}
