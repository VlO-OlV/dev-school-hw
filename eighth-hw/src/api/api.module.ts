import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CustomerModule, EmployeeModule, OrderModule, ProductModule]
})
export class ApiModule {}
