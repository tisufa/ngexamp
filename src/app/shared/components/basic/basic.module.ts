import { NgModule } from '@angular/core';
import { ButtonGroupModule } from './button-group/button-group.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { FormGroupModule } from './form-group/form-group.module';
import { FormModule } from './form/form.module';

@NgModule({
  exports: [
    FormModule,
    CardModule,
    FormGroupModule,
    ButtonGroupModule,
    ButtonModule,
  ],
})
export class BasicModule {}
