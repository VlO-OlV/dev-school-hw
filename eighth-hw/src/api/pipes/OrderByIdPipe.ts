import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Order } from "@prisma/client";
import { OrderRepository } from "src/database/repositories/OrderRepository";
import { InvalidEntityIdException } from "src/utils/exceptions/InvalidEntityIdException";

@Injectable()
export class OrderByIdPipe implements PipeTransform {
    constructor(private readonly orderRepository: OrderRepository) {}
    
    async transform(orderId: string) {
        const order: Order = await this.orderRepository.findOne(parseInt(orderId));
        if(!order) {
            throw new InvalidEntityIdException("Order");
        } else {
            return parseInt(orderId);
        }
    }
}