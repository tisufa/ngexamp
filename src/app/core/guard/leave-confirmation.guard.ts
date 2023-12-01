import { Inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanDeactivate } from '@angular/router';
import { IModal } from '../interfaces/modal.interface';
import { MODAL_CONFIG } from '../token';

@Injectable({
  providedIn: 'root',
})
export class LeaveConfirmationGuard
  implements CanDeactivate<{ formGroup: FormGroup; isProcessing: boolean }>
{
  constructor(@Inject(MODAL_CONFIG) private _modal: IModal) {}

  canDeactivate(component: {
    formGroup: FormGroup;
    isProcessing: boolean;
    onLeaveConfirmation: () => Promise<boolean>;
  }): Promise<boolean> {
    if (component.onLeaveConfirmation) {
      return component.onLeaveConfirmation();
    } else {
      return new Promise((resolve) => {
        if (
          component.formGroup &&
          component.formGroup.dirty &&
          !component.isProcessing
        ) {
          this._modal.leaveConfirmation().subscribe((result) => {
            resolve(!result);
          });
        } else {
          resolve(true);
        }
      });
    }
  }
}
