import { ComponentRef } from '@angular/core';
import { VariantEnum } from 'src/app/core/enum';
import { IObject, IToast, IToastOptions } from 'src/app/core/interfaces';
import { ToastPositionType, VariantType } from 'src/app/core/types';
import { ComponentService } from 'src/app/shared/services/component.service';
import { ToastComponent } from './toast.component';

export class Toast implements IToast {
  constructor(private component: ComponentService) {}

  showInfo(message: string, options?: IToastOptions | undefined) {
    const icon = 'fas fa-circle-info';
    return this.create(VariantEnum.INFO, message, icon, options);
  }

  showSuccess(message: string, options?: IToastOptions | undefined) {
    const icon = 'fas fa-circle-check';
    return this.create(VariantEnum.SUCCESS, message, icon, options);
  }

  showWarning(message: string, options?: IToastOptions | undefined) {
    const icon = 'fas fa-exclamation';
    return this.create(VariantEnum.WARNING, message, icon, options);
  }

  showError(message: string, options?: IToastOptions | undefined) {
    const icon = 'fas fa-triangle-exclamation';
    return this.create(VariantEnum.DANGER, message, icon, options);
  }

  private create(
    variant: VariantType,
    message: string,
    icon: string,
    options?: IToastOptions
  ): any {
    const componentRef: ComponentRef<IObject> =
      this.component.create(ToastComponent);
    componentRef.instance.variant = variant;
    componentRef.instance.message = message;
    componentRef.instance.icon = icon;
    componentRef.instance.options = options;

    const parent = this.getParent(options?.position);

    parent.appendChild(componentRef.location.nativeElement);

    setTimeout(() => {
      componentRef.destroy();
      this.removeParent(parent);
    }, options?.timeOut || 2000);
    return componentRef;
  }

  private getParent(toastPosition?: ToastPositionType): Element {
    const position: ToastPositionType = toastPosition || 'TOP-RIGHT';
    let parent = document
      .getElementsByClassName(`toast-wrapper ${position.toLowerCase()}`)
      .item(0);

    if (!parent) {
      parent = document.createElement('div');
      parent.classList.add('toast-wrapper', `${position?.toLowerCase()}`);
      document.body.appendChild(parent);
    }
    return parent;
  }

  private removeParent(parent: Element): void {
    if (parent.children.length > 0) return;
    document.body.removeChild(parent);
  }
}
