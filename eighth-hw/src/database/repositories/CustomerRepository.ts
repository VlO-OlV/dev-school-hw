import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";

@Injectable()
export class CustomerRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async findManyOrders(customerId: number) {
        return this.databaseService.customer.findUnique({
            where: {
                id: customerId
            },
            select: {
                orders: {
                    include: {
                        product: {
                            select: {
                                amount: true,
                                product: true
                            }
                        }
                    }
                }
            }
        });
    }

    async findOne(customerId: number) {
        return this.databaseService.customer.findUnique({
            where: {
                id: customerId
            }
        });
    }
}