import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Employee } from "@prisma/client";
import { EmployeeRepository } from "src/database/repositories/EmployeeRepository";
import { InvalidEntityIdException } from "src/utils/exceptions/InvalidEntityIdException";

@Injectable()
export class EmployeeByIdPipe implements PipeTransform {
    constructor(private readonly employeeRepository: EmployeeRepository) {}
    
    async transform(employeeId: string) {
        const customer: Employee = await this.employeeRepository.findOne(parseInt(employeeId));
        if(!customer) {
            throw new InvalidEntityIdException("Employee");
        } else {
            return parseInt(employeeId);
        }
    }
}