import { Injectable, NotFoundException } from '@nestjs/common';
import { GetAllItems } from 'src/common/dto/common.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prismaService: PrismaService) {}

  health() {
    return {
      message: 'Brands Services Running',
      status: 'OK',
    };
  }

  async getAll(payload: GetAllItems) {
    const { limit, page } = payload;

    const skip = (page - 1) * limit;
    const take = limit + 1;
    const brands = await this.prismaService.brand.findMany({
      skip,
      take,
    });

    let nextCursor: number | null = null;

    if (brands.length === 0) {
      new NotFoundException('Brands was not found!');
    }

    if (brands.length > limit) {
      nextCursor = page + 1;
    }

    return {
      brands,
      nextCursor,
      total: brands.length,
      page,
    };
  }
}
