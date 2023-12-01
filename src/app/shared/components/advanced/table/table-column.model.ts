import { IObject } from 'src/app/core/interfaces';

export class TableColumnModel {
  public header: string;
  public field: string;
  public format?: 'currency' | 'date';
  public callbacks?: (record: IObject) => any;
  private constructor() {}
}
