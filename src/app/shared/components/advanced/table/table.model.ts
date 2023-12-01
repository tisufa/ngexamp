import { EventEmitter } from '@angular/core';
import { IObject } from 'src/app/core/interfaces';
import { TableColumnModel } from './table-column.model';
export class TableModel<T extends any> {
  public records: Array<T>;
  public requestReload: EventEmitter<void>;
  public customData: IObject | null;
  public keywords?: string;
  private constructor(
    public moduleCode: string,
    public columns: Array<TableColumnModel>
  ) {}

  public setRecords(records: Array<T> = []): void {
    this.records = records;
  }

  public setCustomData(customData: IObject): void {
    const hasCustomData =
      Object.keys(customData).filter(
        (key) =>
          customData[key] !== null && typeof customData[key] !== 'undefined'
      ).length > 0;
    this.customData = hasCustomData ? customData : null;
  }

  public setKeyowrds(keywords?: string): void {
    this.keywords = keywords;
  }

  public reload(): void {
    this.requestReload.emit();
  }

  public removeAt(position: number): void {
    this.records.splice(position, 1);
  }

  public static create<T extends any>(
    moduleCode: string,
    columns: Array<TableColumnModel>
  ): TableModel<T> {
    const model = new TableModel<T>(moduleCode, columns);
    model.requestReload = new EventEmitter();
    return model;
  }
}
