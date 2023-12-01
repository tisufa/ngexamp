import { EmployeeModel } from '../models/employee.model';
import { EmployeeGroupDTO } from './employee-group.dto';
export class EmployeeDTO {
  public id: number;
  public username: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public birth_date: number;
  public basic_salary: number;
  public status: number;
  public group: EmployeeGroupDTO;
  public description: string;
  public createdAt: number;
  protected constructor() {}
}

export class EmployeeResponseDTO extends EmployeeDTO {}

export class EmployeeRequestDTO extends EmployeeDTO {
  public static create(model: EmployeeModel): EmployeeRequestDTO {
    const dto = new EmployeeRequestDTO();
    dto.id = model.id;
    dto.username = model.username;
    dto.first_name = model.firstName;
    dto.last_name = model.lastName;
    dto.email = model.email;
    dto.birth_date = new Date(model.birthDate).getTime();
    dto.basic_salary = model.basicSalary;
    dto.status = model.status.id;
    dto.group = EmployeeGroupDTO.create(model.group);
    dto.description = model.description;
    dto.createdAt = Date.now();
    return dto;
  }
}
