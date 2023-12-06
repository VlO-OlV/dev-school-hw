import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductRepository } from 'src/database/repositories/ProductRepository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(createProductDto: Prisma.ProductCreateInput) {
    return this.productRepository.create(createProductDto);
  }
}
