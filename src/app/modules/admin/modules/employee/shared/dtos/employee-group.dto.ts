import { EmployeeGroupModel } from '../models/employee-group.model';

export class EmployeeGroupDTO {
  public id: number;
  public name: string;
  private constructor() {}
  public static create(model: EmployeeGroupModel): EmployeeGroupDTO {
    const dto = new EmployeeGroupDTO();
    dto.id = model.id;
    dto.name = model.name;
    return dto;
  }
}
