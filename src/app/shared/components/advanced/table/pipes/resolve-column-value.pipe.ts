import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AppConstant } from 'src/app/core/constant/app.constant';
import { IObject } from 'src/app/core/interfaces';
import { ObjectHelper } from 'src/app/shared/helpers/object.helper';
import { CustomCurrencyPipe } from 'src/app/shared/pipes/custom-currency.pipe';
import { TableColumnModel } from '../table-column.model';

@Pipe({
  name: 'resolveColumnValue',
})
export class ResolveColumnValuePipe implements PipeTransform {
  constructor(
    private _customCurrencyPipe: CustomCurrencyPipe,
    private _datePipe: DatePipe
  ) {}
  transform(record: IObject, column: TableColumnModel) {
    const value = column.callbacks
      ? column.callbacks(record)
      : new ObjectHelper(record).resolveValue(column.field);

    switch (column.format) {
      case 'currency':
        return this._customCurrencyPipe.transform(value);
      case 'date':
        return this._datePipe.transform(
          value,
          AppConstant.create().SHORT_DATE_FORMAT
        );
      default:
        return value;
    }
  }
}
