import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(createProductDto: Prisma.ProductCreateInput) {
        return this.databaseService.product.create({
            data: createProductDto
        });
    }
}