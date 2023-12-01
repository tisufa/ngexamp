import { EventEmitter } from '@angular/core';

export class PaginationModel {
  public perPage: number;
  public totalRecord: number;
  public currentPage: number;
  public size: number;
  public requestReload: EventEmitter<void>;
  private constructor() {}

  public reload(): void {
    this.requestReload.emit();
  }

  public setTotalRecords(totalRecord: number): void {
    this.totalRecord = totalRecord || 0;
  }

  public static create(props?: {
    perPage?: number;
    currentPage?: number;
  }): PaginationModel {
    const model = new PaginationModel();
    model.perPage = props?.perPage || 10;
    model.totalRecord = 0;
    model.currentPage = props?.currentPage || 1;
    model.size = 5;
    model.requestReload = new EventEmitter();
    return model;
  }
}
