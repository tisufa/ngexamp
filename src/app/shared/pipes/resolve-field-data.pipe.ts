import { Pipe, PipeTransform } from '@angular/core';
import { IObject } from 'src/app/core/interfaces';
import { ObjectHelper } from '../helpers/object.helper';
@Pipe({
  name: 'resolveFieldData',
})
export class ResolveFieldData implements PipeTransform {
  transform(obj: IObject, field: string) {
    return new ObjectHelper(obj).resolveValue(field);
  }
}
