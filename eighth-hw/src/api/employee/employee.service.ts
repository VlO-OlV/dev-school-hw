import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeRepository } from 'src/database/repositories/EmployeeRepository';


@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async updateEmployee(employeeId: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeeRepository.update(employeeId, updateEmployeeDto);
  }
}