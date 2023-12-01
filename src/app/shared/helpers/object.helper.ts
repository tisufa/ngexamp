import { IObject } from 'src/app/core/interfaces';
export class ObjectHelper {
  constructor(private obj: IObject = {}) {}
  public resolveValue(field: string): any {
    if (!field || !this.obj) return this.obj;
    const fieldSplit = field.split('.');
    let result = { ...this.obj };
    while (fieldSplit.length > 0) {
      const firstSplit = fieldSplit.shift() as string;
      result = result[firstSplit];
      if (!result) fieldSplit.splice(0);
    }
    return result;
  }
}
