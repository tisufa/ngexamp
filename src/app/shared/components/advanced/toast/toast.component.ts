import { Component, Input } from '@angular/core';
import { IToastOptions } from 'src/app/core/interfaces';
import { VariantType } from 'src/app/core/types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() variant: VariantType;
  @Input() icon: string;
  @Input() message: string;
  @Input() options: IToastOptions;
}
