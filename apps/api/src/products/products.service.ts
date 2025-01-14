import { Injectable, NotFoundException } from '@nestjs/common';
import { GetAllItems } from 'src/common/dto/common.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllProductsResponse } from 'src/responses/products.response';
import { CreateProductDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  health() {
    return {
      status: 'OK',
      message: 'Products service is running',
    };
  }

  async getAll(payload: GetAllItems): Promise<GetAllProductsResponse> {
    const { page, limit } = payload;

    const skip = (page - 1) * limit;
    const take = limit + 1;
    const products = await this.prismaService.product.findMany({
      skip,
      take,
    });

    let nextCursor: number | null = null;

    if (products.length === 0) {
      new NotFoundException('Products was not found!');
    }

    if (products.length > limit) {
      nextCursor = page + 1;
    }

    return {
      products,
      nextCursor,
      total: products.length,
      page,
    };
  }

  create(createProductDto: CreateProductDto) {}
}
