import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../global/global.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _globalService: GlobalService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isAssetsUrl = req.url.includes('/assets/');
    const isFullUrl = !!req.url.includes('://');

    const url = isFullUrl
      ? req.url
      : isAssetsUrl
      ? req.url.replace('///', '/')
      : `${this._globalService.config.backendAddress}${req.url}`;

    req = req.clone({ url });

    return next.handle(req);
  }
}
