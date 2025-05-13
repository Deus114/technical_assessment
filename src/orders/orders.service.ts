import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('mail-queue') private readonly mailQueue: Queue,
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const {
      user_id,
      order_date,
      total_price,
      status,
      gender,
      shipping_method,
      payment_method,
      shipping_fee,
      discount,
      housing_type,
      address,
      email,
      phone,
      recipient_name,
      is_not_self_recipient,
      order_items
    } = createOrderDto;

    // Kiểm tra user_id hợp lệ không
    const user = await this.prisma.users.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      throw new NotFoundException(`User với id ${user_id} không tồn tại`);
    }

    // Kiểm tra danh sách sản phẩm
    if (!order_items || order_items.length === 0) {
      throw new BadRequestException('Order items không được để trống');
    }

    // Bắt đầu transaction
    const order = await this.prisma.orders.create({
      data: {
        user_id,
        order_date,
        total_price,
        status,
        gender,
        shipping_method,
        payment_method,
        shipping_fee,
        discount,
        housing_type,
        address,
        email,
        phone,
        recipient_name,
        is_not_self_recipient,
        order_items: {
          create: order_items.map((item) => ({
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            discount: item.discount ?? 0.00,
          })),
        },
      },
      include: {
        order_items: true,
      },
    });

    // Thêm job gửi mail vào queue
    await this.mailQueue.add('send-confirmation',
      {
        email,
      },
      {
        removeOnComplete: true,
      }
    );

    return {
      order,
    };
  }
}
