import { Injectable } from '@nestjs/common';
import { DatabaseService} from '../../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async update(employeeId: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id: employeeId
      },
      data: updateEmployeeDto
    });
  }
}
