import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Result } from 'src/app/core/domains';
import { EmployeeRequestDTO } from '../dtos';
import { EmployeeModel } from '../models';
import { EmployeeService } from '../services';

@Injectable()
export class EmployeeUsecase {
  constructor(private _service: EmployeeService) {}
  public create(model: EmployeeModel): Observable<Result<null | string>> {
    const requestDTO = EmployeeRequestDTO.create(model);
    return this._service.create(requestDTO).pipe(
      map(() => Result.ok(null)),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public getById(id: number): Observable<Result<EmployeeModel | string>> {
    return this._service.getById(id).pipe(
      map((successResponseDTO) =>
        Result.ok(EmployeeModel.create(successResponseDTO))
      ),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public update(model: EmployeeModel): Observable<Result<null | string>> {
    const requestDTO = EmployeeRequestDTO.create(model);
    return this._service.update(requestDTO).pipe(
      map(() => Result.ok(null)),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public deleteById(id: number): Observable<Result<null | string>> {
    return this._service.deleteById(id).pipe(
      map(() => Result.ok(null)),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }
}
