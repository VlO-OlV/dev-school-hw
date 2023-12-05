import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class CustomerService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(customerId: number) {
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
}
