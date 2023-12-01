import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariantEnum } from 'src/app/core/enum';
import { IModal } from 'src/app/core/interfaces/modal.interface';
import { VariantType } from 'src/app/core/types';
import { IModalOptions } from '../../../../core/interfaces';
import { PopupService } from '../popup';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService implements IModal {
  constructor(private _popupService: PopupService) {}

  public saveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.saveConfirmation',
      message: message || 'app.modal.message.saveConfirmation',
    };
    return this.open({
      ...defaultConfig,
      ...configProps,
    });
  }

  public updateConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.updateConfirmation',
      message: message || 'app.modal.message.updateConfirmation',
      positiveButton: 'app.button.update',
    };
    return this.open({
      ...defaultConfig,
      ...configProps,
    });
  }

  public deleteConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.deleteConfirmation',
      message: message || 'app.modal.message.deleteConfirmation',
      positiveButton: 'app.button.delete',
    };

    return this.open(
      {
        ...defaultConfig,
        ...configProps,
      },
      VariantEnum.DANGER
    );
  }

  public leaveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.leaveConfirmation',
      message: 'app.modal.message.leaveConfirmation',
      negativeButton: 'app.button.leaveThisPage',
      positiveButton: 'app.button.stayOnThisPage',
    };
    return this.open(
      {
        ...defaultConfig,
        ...config,
      },
      VariantEnum.PRIMARY
    );
  }

  confirmation(config: IModalOptions): Observable<boolean> {
    return this.open(config);
  }

  private open(
    config: IModalOptions = {},
    variant?: VariantType
  ): Observable<boolean> {
    let message = config.message as string;
    if (config.replaceWith) {
      message = message.replace(/%\$1%/g, config.replaceWith);
    }
    return this._popupService.open(ModalComponent, {
      ...config,
      message,
      variant,
    });
  }
}
