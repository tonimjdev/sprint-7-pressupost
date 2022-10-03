import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { variationPlacements } from '@popperjs/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  web: number = 500;
  seo: number = 300;
  pub: number = 200;

  totalServicios: number = 0;
  acumulado: number = 0;

  calcularTotal(valor:any):void {
    if (valor.currentTarget.checked) {
      if (valor.target.defaultValue === "web") this.acumulado = this.web;
      else if (valor.target.defaultValue === "seo") this.acumulado = this.seo;
      else this.acumulado = this.pub;
      this.totalServicios+=this.acumulado;
    } else {
      if (valor.target.defaultValue === "web") this.acumulado = this.web;
      else if (valor.target.defaultValue === "seo") this.acumulado = this.seo;
      else this.acumulado = this.pub;
      this.totalServicios-=this.acumulado;
    }
  }
}