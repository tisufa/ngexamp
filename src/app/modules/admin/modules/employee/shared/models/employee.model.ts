import { EmployeeResponseDTO } from '../dtos';
import { EmployeeGroupModel } from './employee-group.model';
import { EmployeeStatusModel } from './employee-status.model';

export class EmployeeModel {
  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public birthDate: Date;
  public basicSalary: number;
  public status: EmployeeStatusModel;
  public group: EmployeeGroupModel;
  public description: string;
  private constructor() {}

  public static create(dto: EmployeeResponseDTO): EmployeeModel {
    const model = new EmployeeModel();
    model.id = dto.id;
    model.username = dto.username;
    model.firstName = dto.first_name;
    model.lastName = dto.last_name;
    model.email = dto.email;
    model.birthDate = new Date(dto.birth_date);
    model.basicSalary = dto.basic_salary || 0;
    model.status = EmployeeStatusModel.getById(dto.status);
    model.group = EmployeeGroupModel.create(dto.group);
    model.description = dto.description;
    return model;
  }

  public static createEmpty(): EmployeeModel {
    const model = new EmployeeModel();
    model.status = EmployeeStatusModel.createEmpty();
    model.group = EmployeeGroupModel.createEmpty();
    return model;
  }
}
