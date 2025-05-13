import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Tên không được để trống' })
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({ message: 'category_id không được để trống' })
    category_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'price không được để trống' })
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsString()
    size: string;

    @ApiProperty()
    @IsString()
    color: string;

    @ApiProperty()
    @IsString()
    description: string;
}

export class SearchProductDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    qs?: string;
}