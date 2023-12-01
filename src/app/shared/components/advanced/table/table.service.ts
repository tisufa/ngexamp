import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TableService {
  constructor(private _httpClient: HttpClient) {}
  public getRecords(stringUrl: string): Observable<HttpResponse<any[]>> {
    return this._httpClient.get<any[]>(stringUrl, {
      observe: 'response',
    });
  }
}
