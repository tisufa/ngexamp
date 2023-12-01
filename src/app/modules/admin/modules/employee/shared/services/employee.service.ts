import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRequestDTO, EmployeeResponseDTO } from '../dtos/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  public create(dto: EmployeeRequestDTO): Observable<any> {
    return this._httpClient.post('/employees', dto);
  }

  public getById(id: number): Observable<EmployeeResponseDTO> {
    return this._httpClient.get<EmployeeResponseDTO>(`/employees/${id}`);
  }

  public update(dto: EmployeeRequestDTO): Observable<any> {
    return this._httpClient.put(`/employees/${dto.id}`, dto);
  }

  public deleteById(id: number): Observable<any> {
    return this._httpClient.delete<any>(`/employees/${id}`);
  }
}
