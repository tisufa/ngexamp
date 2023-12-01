import { Injectable } from '@angular/core';
import { TableService } from './table.service';

@Injectable()
export class TableUsecase {
  constructor(private _service: TableService) {}
}
