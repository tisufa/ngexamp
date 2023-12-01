import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { Pagination } from './pagination';
import { PaginationModel } from './pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent extends BaseComponent {
  @Input() model: PaginationModel;
  @Output() onChange: EventEmitter<number>;

  public pagination: Pagination;

  constructor() {
    super('app-pagination');
    this.onChange = new EventEmitter();
  }

  protected onInit(): void {
    this.resolvePagination();
    this.listenReloadRequest();
    this.setStateReady();
  }

  private resolvePagination(): void {
    const { totalRecord, perPage, size, currentPage } = this.model;
    const pagination = Pagination.createEmpty();
    const firstPage = 1;
    const lastPage = Math.ceil(totalRecord / perPage) || 1;

    const startPage =
      currentPage - Math.floor(size / 2) + (size % 2 === 0 ? 1 : 0);
    const endPage = currentPage + Math.floor(size / 2);

    pagination.firstPage = firstPage;
    pagination.lastPage = lastPage;
    pagination.startPage =
      startPage < firstPage
        ? firstPage
        : startPage > lastPage - size
        ? lastPage - size + 1 < firstPage
          ? firstPage
          : lastPage - size + 1
        : startPage;
    pagination.endPage =
      endPage > lastPage
        ? lastPage
        : endPage < size
        ? size > lastPage
          ? lastPage
          : size
        : endPage;
    pagination.currentPage = this.model.currentPage;
    pagination.list = Array(pagination.endPage - pagination.startPage + 1)
      .fill(0)
      .map((val, index) => val + index + pagination.startPage);

    this.pagination = pagination;
  }

  public listenReloadRequest(): void {
    this.model.requestReload.subscribe(() => {
      this.resolvePagination();
    });
  }

  public handleBack(event: Event): void {
    event.preventDefault();
    if (this.model.currentPage === 1) return;
    this.model.currentPage = this.model.currentPage - 1;
    this.onChange.emit(this.model.currentPage);
    this.resolvePagination();
  }

  public handleChangePage(event: Event, page: number): void {
    event.preventDefault();
    this.model.currentPage = page;
    this.onChange.emit(page);
    this.resolvePagination();
  }

  public handleNext(event: Event): void {
    event.preventDefault();
    if (this.model.currentPage === this.pagination.lastPage) return;
    this.model.currentPage = this.pagination.currentPage + 1;
    this.onChange.emit(this.model.currentPage);
    this.resolvePagination();
  }
}
