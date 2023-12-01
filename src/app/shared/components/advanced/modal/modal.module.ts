import { NgModule } from '@angular/core';
import { MODAL_CONFIG } from 'src/app/core/token';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { ButtonModule } from '../../basic/button/button.module';
import { PopupModule } from '../popup/popup.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [VendorModule, PopupModule, ButtonModule],
  declarations: [ModalComponent],
  providers: [
    {
      provide: MODAL_CONFIG,
      useClass: ModalService,
    },
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
