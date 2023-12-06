import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderByIdPipe } from '../pipes/OrderByIdPipe';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Delete(':id')
  remove(@Param('id', OrderByIdPipe) id: string) {
    return this.orderService.removeOrder(+id);
  }
}
