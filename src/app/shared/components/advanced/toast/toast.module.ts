import { NgModule } from '@angular/core';
import { TOAST_CONFIG } from 'src/app/core/token';
import { ComponentService } from 'src/app/shared/services/component.service';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { ToastComponent } from './toast.component';
import { toastFactory } from './toast.factory';

@NgModule({
  imports: [VendorModule],
  declarations: [ToastComponent],
  providers: [
    {
      provide: TOAST_CONFIG,
      useFactory: toastFactory,
      deps: [ComponentService],
    },
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
