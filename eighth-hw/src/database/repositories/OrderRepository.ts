import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";

@Injectable()
export class OrderRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async remove(orderId: number) {
        return this.databaseService.order.delete({
            where: {
                id: orderId
            }
        });
    }

    async findOne(orderId: number) {
        return this.databaseService.order.findUnique({
            where: {
                id: orderId
            }
        });
    }
}