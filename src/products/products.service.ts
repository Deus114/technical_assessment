import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, SearchProductDto } from './dto/create-product.dto';
import aqp from 'api-query-params';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) { }

  async getByCategory(categoryId: number) {
    return this.prisma.products.findMany({
      where: { category_id: categoryId },
    });
  }

  async search(qs: string) {
    const { filter, sort } = aqp(qs);

    // Xử lý sort
    const orderBy = {};
    for (const key in sort) {
      orderBy[key] = sort[key] === -1 ? 'desc' : 'asc';
    }

    const where: any = {};

    // Tìm kiếm tương đối cho từng field
    for (const key in filter) {
      where[key] = {
        contains: filter[key],
        mode: 'insensitive',
      };
    }

    return await this.prisma.products.findMany({
      where,
      orderBy: Object.keys(orderBy).length > 0 ? orderBy : undefined,
    });
  }

  async create(createProductDto: CreateProductDto) {
    const { name, category_id, color, price, size, description } = createProductDto
    return await this.prisma.products.create({
      data: {
        name, category_id, color, price, size, description
      },
    });
  }
}