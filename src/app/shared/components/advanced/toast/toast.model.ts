import { IToastOptions } from 'src/app/core/interfaces';
import { VariantType } from 'src/app/core/types';
export class ToastModel {
  public variant: VariantType;
  public message: string;
  public options?: IToastOptions;
  private constructor() {}

  public static create(
    variant: VariantType,
    message: string,
    options?: IToastOptions
  ): ToastModel {
    const model = new ToastModel();
    model.variant = variant;
    model.message = message;
    model.options = options;
    return model;
  }
}
