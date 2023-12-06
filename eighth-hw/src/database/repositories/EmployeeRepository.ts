import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class EmployeeRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async update(employeeId: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
        return this.databaseService.employee.update({
            where: {
                id: employeeId
            },
            data: updateEmployeeDto
        });
    }

    async findOne(employeeId: number) {
        return this.databaseService.employee.findUnique({
            where: {
                id: employeeId
            }
        });
    }
}