import { InjectionToken } from '@angular/core';
import { IToast } from '../interfaces';
export const TOAST_CONFIG = new InjectionToken<IToast>('TOKEN_CONFIG', {
  providedIn: 'root',
  factory: () => {
    return {
      showInfo(): any {
        return null;
      },
      showSuccess(): any {
        return null;
      },
      showWarning(): any {
        return null;
      },
      showError(): any {
        return null;
      },
    };
  },
});
