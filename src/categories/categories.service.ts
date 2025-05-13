import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.categories.findMany();
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: {
        category_name: createCategoryDto.category_name,
      },
    });
  }
}
