import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeComponent } from './employee.component';
import { employeeRoutes } from './employee.routes';
import { EmployeeService } from './shared/services';
import { EmployeeUsecase } from './shared/usecase';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(employeeRoutes)],
  declarations: [EmployeeComponent],
  providers: [EmployeeService, EmployeeUsecase],
})
export class EmployeeModule {}
