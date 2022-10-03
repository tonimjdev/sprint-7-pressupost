import { Injectable } from '@angular/core';

@Injectable()
export class PressupostService {
  calcOpcionsWeb(pages: number, languages: number): number {
    const totalOpcions = (pages + languages) * 30;
    return totalOpcions;
  }
}
