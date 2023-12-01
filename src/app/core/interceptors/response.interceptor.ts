import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === 500) {
            // execute 500 error
          } else if (errorResponse.status === 401) {
            // execute unautorize error
          }
        },
      })
    );
  }
}
