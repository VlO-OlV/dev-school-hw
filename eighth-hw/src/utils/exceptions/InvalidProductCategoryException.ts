import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidProductCategoryException extends HttpException {
    constructor() {
        super('Invalid product category', HttpStatus.FORBIDDEN);
    }
}