import { Category } from '@prisma/client';
import { IsString, IsInt, IsEnum, IsNumber} from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsEnum(Category)
    category: Category;

    @IsInt()
    amount: number;

    @IsNumber()
    price: number;
}