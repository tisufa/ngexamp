import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModule } from 'src/app/core/base';
import { Result } from 'src/app/core/domains';
import { EmployeeModel } from '../../shared/models';
import { EmployeeUsecase } from '../../shared/usecase';

@Component({
  templateUrl: './detail.component.html',
})
export class DetailComponent extends BaseModule {
  public employeeId: number;
  public employee: EmployeeModel;
  constructor(
    private route: ActivatedRoute,
    private _usecase: EmployeeUsecase
  ) {
    super('module.admin.module.employee.module.detail');
  }

  protected override onInit(): void {
    this.setStateInitialization();
    this.getEmployeeDetail();
  }

  private setStateInitialization(): void {
    const employeeId = this.route.snapshot.paramMap.get('id') as string;
    this.employeeId = +employeeId;
    if (isNaN(this.employeeId)) {
      this.navigateToEmployee();
      return;
    }
    this.employee = EmployeeModel.createEmpty();
  }

  private getEmployeeDetail(): void {
    this._usecase
      .getById(this.employeeId)
      .subscribe((result: Result<EmployeeModel | string>) => {
        this.setStateReady();
        if (result.isSuccess) {
          this.employee = result.getValue() as EmployeeModel;
        } else {
          this.globalService.toast.showError(
            `${this.moduleCode}.toast.error.get`
          );
        }
      });
  }

  public handleOk(): void {
    this.navigateToEmployee();
  }

  private navigateToEmployee(): void {
    this.router.navigate(['/employee'], {
      queryParams: this.route.snapshot.queryParams,
    });
  }
}
