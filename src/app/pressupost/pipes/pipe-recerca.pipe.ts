
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipebuscar',
  pure: false
})
export class PipeRecercaPipe implements PipeTransform {

  transform(value: any, arg: any) {

    const resultPresus = [];
    for(const llista of value) {
      if (llista.presuNom.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPresus.push(llista);
      };
    };
    return resultPresus;
  }

}
