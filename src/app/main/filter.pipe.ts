import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, field: string, filter: object): any {
    if(!filter) return items;
    if(!items) return [];

    return items.filter(item => item[field].toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);
  }

}
