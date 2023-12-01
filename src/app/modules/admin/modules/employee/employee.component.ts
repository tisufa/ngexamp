import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModule } from 'src/app/core/base';
import { Result } from 'src/app/core/domains';
import { IObject } from 'src/app/core/interfaces';
import { TableModel } from 'src/app/shared/components/advanced/table/table.model';
import { EmployeeResponseDTO } from './shared/dtos/employee.dto';
import { EmployeeGroupModel } from './shared/models';
import { EmployeeStatusModel } from './shared/models/employee-status.model';
import { EmployeeUsecase } from './shared/usecase';

@Component({
  templateUrl: './employee.component.html',
})
export class EmployeeComponent extends BaseModule {
  public tableEmployee: TableModel<any>;
  public statuses: EmployeeStatusModel[];
  public groups: EmployeeGroupModel[];
  public queryParams: { status?: number; keywords?: string };
  constructor(
    private _usecase: EmployeeUsecase,
    private _route: ActivatedRoute
  ) {
    super('module.admin.module.employee');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.buildFormGroup();
    this.buildTable();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.statuses = EmployeeStatusModel.createList();
    this.groups = EmployeeGroupModel.createList();

    const { status, q } = this._route.snapshot.queryParams;

    this.queryParams = {};

    if (status && !isNaN(status)) {
      this.queryParams.status = +status;
    }

    if (q) {
      this.queryParams.keywords = q;
    }
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      status: [this.queryParams.status],
    });
  }

  private buildTable(): void {
    this.tableEmployee = TableModel.create(this.moduleCode, [
      {
        header: 'username',
        field: 'username',
      },
      {
        header: 'firstName',
        field: 'first_name',
      },
      {
        header: 'lastName',
        field: 'last_name',
      },
      {
        header: 'email',
        field: 'email',
      },
      {
        header: 'birthDate',
        field: 'birth_date',
        format: 'date',
      },
      {
        header: 'basicSalary',
        field: 'basic_salary',
        format: 'currency',
      },
      {
        header: 'status',
        field: 'status',
        callbacks: (record: IObject) => {
          const { translationKey } = EmployeeStatusModel.getById(record.status);
          return this.globalService.translate.instant(translationKey);
        },
      },
      {
        header: 'group',
        field: 'group.name',
      },
      {
        header: 'description',
        field: 'description',
      },
    ]);
    this.tableEmployee.setCustomData({ status: this.queryParams.status });
    this.tableEmployee.setKeyowrds(this.queryParams.keywords);
  }

  public handleChangeFilter(): void {
    this.tableEmployee.setCustomData(this.formGroup.value);
    this.tableEmployee.reload();
  }

  public handleAdd(): void {
    this.router.navigate(['/employee/add']);
  }

  public handleView(employee: any): void {
    this.router.navigate([`/employee/detail/${employee.id}`], {
      queryParams: {
        ...(this.tableEmployee.customData || {}),
        q: this.tableEmployee.keywords,
      },
    });
  }

  public handleEdit(): void {
    this.globalService.toast.showWarning(
      `${this.moduleCode}.toast.warning.edit`
    );
  }

  public handleDelete(employee: EmployeeResponseDTO): void {
    this.globalService.modal
      .deleteConfirmation()
      .subscribe((result: boolean) => {
        if (!result) return;
        this.delete(employee);
      });
  }

  private delete(employee: EmployeeResponseDTO): void {
    this.setStateProcessing();
    this._usecase
      .deleteById(employee.id)
      .subscribe((result: Result<null | string>) => {
        if (result.isSuccess) {
          this.globalService.toast.showSuccess(
            `${this.moduleCode}.toast.success.delete`
          );
          this.tableEmployee.reload();
        } else {
          this.globalService.toast.showError(
            `${this.moduleCode}.toast.error.delete`
          );
        }
        this.setStateReady();
      });
  }
}
