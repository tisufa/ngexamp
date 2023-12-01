import { IToastOptions } from './toast-options.interface';
export interface IToast {
  showInfo(message: string, options?: IToastOptions): any;
  showSuccess(message: string, options?: IToastOptions): any;
  showWarning(message: string, options?: IToastOptions): any;
  showError(message: string, options?: IToastOptions): any;
}
