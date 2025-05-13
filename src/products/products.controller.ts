import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, SearchProductDto } from './dto/create-product.dto';
import { Public } from 'src/decorator/customize';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get('by-category')
  @Public()
  getByCategory(@Query('categoryId') categoryId: number) {
    return this.productsService.getByCategory(Number(categoryId));
  }

  @Get('search')
  @Public()
  search(@Query() qs: string) {
    return this.productsService.search(qs);
  }

  @Post()
  @Public()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}