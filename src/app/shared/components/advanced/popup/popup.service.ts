import { Injectable, TemplateRef, Type } from '@angular/core';
import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { IObject } from 'src/app/core/interfaces';

@Injectable()
export class PopupService {
  constructor(private _modalService: NgbModal) {}

  public open(
    component: Type<any> | TemplateRef<any>,
    dataObject: IObject = {},
    options: NgbModalOptions = {}
  ): Observable<boolean> {
    const subject = new Subject<any>();

    const defaultOptions: NgbModalOptions = {};

    const modal: NgbModalRef = this._modalService.open(component, {
      ...defaultOptions,
      ...options,
    });

    Object.assign(modal.componentInstance, dataObject);

    if (modal.componentInstance.onClose) {
      modal.componentInstance.onClose.subscribe(() => {
        modal.close();
      });
    }

    if (modal.componentInstance.onChange) {
      modal.componentInstance.onChange.subscribe((result: boolean) => {
        modal.close();
        subject.next(result);
      });
    }

    if (modal.dismissed) {
      modal.dismissed.subscribe(() => {
        subject.next(false);
      });
    }

    return subject.asObservable();
  }
}
