import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/database/repositories/OrderRepository';


@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async removeOrder(orderId: number) {
    return this.orderRepository.remove(orderId);
  }
}
