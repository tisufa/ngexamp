import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { Result } from 'src/app/core/domains';
import { Validators } from 'src/app/shared/validators';
import { EmployeeGroupModel, EmployeeModel } from '../../shared/models';
import { EmployeeStatusModel } from '../../shared/models/employee-status.model';
import { EmployeeUsecase } from '../../shared/usecase';

@Component({
  templateUrl: './add.component.html',
})
export class AddComponent extends BaseModule {
  public groups: Array<any>;
  public statuses: Array<any>;
  public currentDate: Date;
  constructor(private _usecase: EmployeeUsecase) {
    super('module.admin.module.employee.module.add');
  }

  protected override onInit(): void {
    this.setStateInitialization();
    this.buildFormGroup();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.groups = EmployeeGroupModel.createList();
    this.statuses = EmployeeStatusModel.createList();
    this.currentDate = new Date();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.username`
          ),
          Validators.minLength(
            3,
            `${this.moduleCode}.form.validation.minLength.username`
          ),
          Validators.maxLength(
            16,
            `${this.moduleCode}.form.validation.maxLength.username`
          ),
        ]),
      ],
      firstName: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.firstName`
          ),
          Validators.maxLength(
            16,
            `${this.moduleCode}.form.validation.maxLength.firstName`
          ),
        ]),
      ],
      lastName: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.firstName`
          ),
          Validators.maxLength(
            32,
            `${this.moduleCode}.form.validation.maxLength.firstName`
          ),
        ]),
      ],
      email: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.email`
          ),
          Validators.email(`${this.moduleCode}.form.validation.email`),
        ]),
      ],
      birthDate: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.birthDate`
          ),
        ]),
      ],
      basicSalary: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.basicSalary`
          ),
        ]),
      ],
      status: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.status`
          ),
        ]),
      ],
      group: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.group`
          ),
        ]),
      ],
      description: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.description`
          ),
        ]),
      ],
    });
  }

  public handleCancel(): void {
    this.router.navigate(['/employee']);
  }

  public handleSave(): void {
    this.validate();
    if (this.formGroup.valid) {
      this.globalService.modal
        .saveConfirmation()
        .subscribe((result: boolean) => {
          if (!result) return;
          this.save();
        });
    }
  }

  private save(): void {
    const model: EmployeeModel = this.formGroup.value;
    this.setStateProcessing();
    this._usecase.create(model).subscribe((result: Result<null | string>) => {
      if (result.isSuccess) {
        this.globalService.toast.showSuccess(
          `${this.moduleCode}.toast.success.add`
        );
        this.router.navigate(['/employee']);
      } else {
        this.globalService.toast.showError(
          `${this.moduleCode}.toast.error.add`
        );
        this.setStateReady();
      }
    });
  }
}
