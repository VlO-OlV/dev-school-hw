import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Customer } from "@prisma/client";
import { CustomerRepository } from "src/database/repositories/CustomerRepository";
import { InvalidEntityIdException } from "src/utils/exceptions/InvalidEntityIdException";

@Injectable()
export class CustomerByIdPipe implements PipeTransform {
    constructor(private readonly customerRepository: CustomerRepository) {}
    
    async transform(customerId: string) {
        const customer: Customer = await this.customerRepository.findOne(parseInt(customerId));
        if(!customer) {
            throw new InvalidEntityIdException("Customer");
        } else {
            return parseInt(customerId);
        }
    }
}