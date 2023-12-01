import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PopupModule } from './popup/popup.module';
import { TableModule } from './table';
import { ToastModule } from './toast/toast.module';

@NgModule({
  exports: [DropdownModule, ModalModule, PopupModule, TableModule, ToastModule],
})
export class AdvancedModule {}
