export class EmployeeStatusModel {
  public static instances: EmployeeStatusModel[];
  public id: number;
  public translationKey: string;
  private constructor() {}

  public static getById(id: number): EmployeeStatusModel {
    if (!this.instances) this.createList();
    return this.instances.filter((employee) => employee.id === id)[0];
  }

  public static create(id: number, key: string): EmployeeStatusModel {
    const model = new EmployeeStatusModel();
    model.id = id;
    model.translationKey = `module.admin.module.employee.option.status.${key}`;
    return model;
  }

  public static createList(): EmployeeStatusModel[] {
    if (this.instances) return this.instances;
    this.instances = 'internship,outsourcing,contract,permanent'
      .split(',')
      .map((status: string, index: number) => this.create(index + 1, status));
    return this.instances;
  }

  public static createEmpty(): EmployeeStatusModel {
    return new EmployeeStatusModel();
  }
}
