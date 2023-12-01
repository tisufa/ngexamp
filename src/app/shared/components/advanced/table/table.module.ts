import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCurrencyPipe } from 'src/app/shared/pipes/custom-currency.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { ButtonModule } from '../../basic/button/button.module';
import { ResolveColumnValuePipe } from './pipes/resolve-column-value.pipe';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  imports: [VendorModule, ButtonModule, PipesModule],
  declarations: [TableComponent, ResolveColumnValuePipe],
  providers: [DatePipe, CustomCurrencyPipe, TableService],
  exports: [TableComponent],
})
export class TableModule {}
