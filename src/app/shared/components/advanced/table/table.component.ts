import { Location } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { BaseComponent } from 'src/app/core/base';
import { IObject } from 'src/app/core/interfaces';
import { QueryParams } from 'src/app/shared/utils';
import { TableColumnModel } from './table-column.model';
import { TableModel } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent {
  @Input() model: TableModel<any>;
  @Input() stringUrl: string;

  @ContentChild('headerActions') headerActionsTmpl: TemplateRef<any>;
  @ContentChild('headerFilter') headerFilterTmpl: TemplateRef<any>;
  @ContentChild('actionButtons') actionButtonsTmpl: TemplateRef<any>;

  public records: Array<any>;

  public perPage: number;
  public currentPage: number;
  public lastPage: number;

  public perPages: number[];

  public sortOrder: 'asc' | 'desc' | null;
  public sortField: string | null;
  public keywords: FormControl;

  constructor(private _service: TableService, private _location: Location) {
    super('table');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.setStateLoading();
    this.resolveRecords();
    this.listenReloadRequest();
    this.listenKeywordsChange();
  }

  private setStateInitialization(): void {
    this.records = [];
    this.perPages = [5, 10, 25];
    this.keywords = new FormControl(this.model.keywords);
    this.setPagination();
  }

  private resolveRecords(): void {
    this.stringUrl ? this.resolveServer() : this.resolveClient();
  }

  private setPagination(): void {
    this.perPage = this.perPages[0];
    this.currentPage = 1;
    this.lastPage = this.stringUrl
      ? 0
      : Math.ceil((this.model.records || []).length / this.perPage);
  }

  private resolveServer(): void {
    const query = this.createQuery();
    this._service.getRecords(`${this.stringUrl}${query}`).subscribe({
      next: (successResponse: HttpResponse<any[]>) => {
        const totalRecord = successResponse.headers.get('X-Total-Count');
        this.records = successResponse.body || [];
        this.lastPage = Math.ceil(
          (totalRecord ? +totalRecord : 0) / this.perPage
        );
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      },
      complete: () => {
        this.setStateReady();
      },
    });
  }

  private createQuery(): string {
    const start = (this.currentPage - 1) * this.perPage;
    const end = this.currentPage * this.perPage;

    let queryParams = `?_start=${start}&_end=${end}&_sort=${
      this.sortField || 'createdAt'
    }&_order=${this.sortOrder || 'desc'}`;

    const { customData } = this.model;

    if (customData) {
      Object.keys(customData).forEach((key) => {
        const value = customData[key];
        if (typeof value === 'undefined' || value === null) return;
        queryParams += `&${key}=${value}`;
      });
    }

    if (this.keywords.value) {
      queryParams += `&q=${this.keywords.value}`;
    }

    return queryParams;
  }

  private resolveClient(): void {
    let records = Array.from(this.model.records || []);
    records = records.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage
    );
    this.records = records;
    this.setStateReady();
  }

  private listenReloadRequest(): void {
    this.model.requestReload.subscribe(() => {
      this.currentPage = 1;
      this.resolveRecords();
      this.setRouterParams();
      if (this.stringUrl) return;
      this.setPagination();
    });
  }

  private setRouterParams(): void {
    const objParam: IObject = { ...(this.model.customData || {}) };
    if (this.keywords.value) {
      objParam.q = this.keywords.value;
    }
    let queryParams = QueryParams.create(objParam);
    this._location.go(`${this.router.url.split('?')[0]}${queryParams}`);
  }

  public listenKeywordsChange(): void {
    this.keywords.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.currentPage = 1;
      this.model.setKeyowrds(value);
      this.setRouterParams();
      this.resolveRecords();
    });
  }

  public handleSort(columnModel: TableColumnModel): void {
    const field = columnModel.field;
    this.sortOrder =
      field === this.sortField
        ? !this.sortOrder
          ? 'asc'
          : this.sortOrder === 'asc'
          ? 'desc'
          : null
        : 'asc';
    this.sortField = !this.sortOrder ? null : field;
    this.resolveRecords();
  }

  public handleBackPage(): void {
    if (this.currentPage === 1 || this.isProcessing) return;
    this.setStateProcessing();
    this.currentPage--;
    this.resolveRecords();
  }

  public handleNextPage(): void {
    if (this.currentPage === this.lastPage || this.isProcessing) return;
    this.setStateProcessing();
    this.currentPage++;
    this.resolveRecords();
  }

  public handleChangePerPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.perPage = +selectElement.value;
    this.resolveRecords();
  }
}
