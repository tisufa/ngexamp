import { ToastPositionType, VariantType } from '../types';
export interface IToastOptions {
  position?: ToastPositionType;
  timeOut?: number;
  replaceWith?: string;
  icon?: string;
  variant?: VariantType;
  static?: boolean;
}
