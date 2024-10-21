import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppertable',
  standalone: true
})
export class UppertablePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string[]): string[] {
    return value.map((element) => element.toUpperCase());
  }

}
