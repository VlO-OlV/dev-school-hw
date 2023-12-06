import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerByIdPipe } from '../pipes/CustomerByIdPipe';

@Controller('api/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id/orders')
  findOne(@Param('id', CustomerByIdPipe) id: string) {
    return this.customerService.getCustomerOrders(+id);
  }
}
