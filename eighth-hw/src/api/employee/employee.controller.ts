import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
import { EmployeeByIdPipe } from '../pipes/EmployeeByIdPipe';
import { ValidationPipe } from '../pipes/ValidationPipe';
import { UpdateEmployeeDto } from './update-employee.dto';

@Controller('api/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Patch(':id')
  update(@Param('id', EmployeeByIdPipe) id: string, @Body(new ValidationPipe()) updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(+id, updateEmployeeDto);
  }
}
