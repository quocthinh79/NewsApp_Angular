import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'haGia'
})
export class HaGiaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
