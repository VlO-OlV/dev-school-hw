import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Prisma } from '@prisma/client';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }
}
