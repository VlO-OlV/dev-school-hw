import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CustomerRepository } from './repositories/CustomerRepository';
import { EmployeeRepository } from './repositories/EmployeeRepository';
import { OrderRepository } from './repositories/OrderRepository';
import { ProductRepository } from './repositories/ProductRepository';

@Global()
@Module({
  providers: [DatabaseService, CustomerRepository, EmployeeRepository, OrderRepository, ProductRepository],
  exports: [DatabaseService, CustomerRepository, EmployeeRepository, OrderRepository, ProductRepository]
})
export class DatabaseModule {}
