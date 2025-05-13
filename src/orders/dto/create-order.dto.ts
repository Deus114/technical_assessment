import { IsNotEmpty, IsEmail, IsBoolean, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    product_id: number;

    @ApiProperty({ example: 2 })
    @IsNotEmpty()
    quantity: number;

    @ApiProperty({ example: 980000 })
    @IsNotEmpty()
    unit_price: number;

    @ApiProperty({ example: 0 })
    discount?: number;
}

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    user_id: number;

    @ApiProperty()
    @Type(() => Date)
    order_date: Date;

    @ApiProperty()
    @IsNotEmpty()
    total_price: number;

    @ApiProperty()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsNotEmpty()
    gender: string;

    @ApiProperty()
    @IsNotEmpty()
    shipping_method: string;

    @ApiProperty()
    @IsNotEmpty()
    payment_method: string;

    @ApiProperty()
    @IsNotEmpty()
    shipping_fee: number;

    @ApiProperty()
    @IsNotEmpty()
    discount: number;

    @ApiProperty()
    @IsNotEmpty()
    housing_type: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    recipient_name: string;

    @ApiProperty()
    @IsBoolean()
    is_not_self_recipient: boolean;

    @ApiProperty({
        type: [CreateOrderItemDto],
        example: [
            {
                product_id: 1,
                quantity: 2,
                unit_price: 980000,
                discount: 0
            }
        ],
    })
    @IsArray()
    @Type(() => CreateOrderItemDto)
    order_items: CreateOrderItemDto[];
}

