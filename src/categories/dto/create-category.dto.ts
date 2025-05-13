import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty({ example: 'Shoes' })
    @IsString()
    @MaxLength(100)
    @IsNotEmpty({ message: 'Tên không được để trống' })
    category_name: string;
}