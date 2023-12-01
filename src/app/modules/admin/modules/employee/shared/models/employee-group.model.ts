import { EmployeeGroupDTO } from '../dtos';

export class EmployeeGroupModel {
  public static instances: EmployeeGroupModel[];
  public id: number;
  public name: string;
  private constructor() {}

  public static getById(id: number): EmployeeGroupModel {
    if (!this.instances) this.createList();
    return this.instances.filter((employeeGroup) => employeeGroup.id === id)[0];
  }

  public static create(dto: EmployeeGroupDTO): EmployeeGroupModel {
    const model = new EmployeeGroupModel();
    model.id = dto.id;
    model.name = dto.name;
    return model;
  }

  public static createList(): EmployeeGroupModel[] {
    if (this.instances) return this.instances;
    this.instances = Array(10)
      .fill(0)
      .map((val, index) => {
        const id = val + index + 1;
        const name = `Group ${id}`;
        return { id, name };
      });
    return this.instances;
  }

  public static createEmpty(): EmployeeGroupModel {
    return new EmployeeGroupModel();
  }
}
