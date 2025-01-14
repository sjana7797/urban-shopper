import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  // @Post()
  // create(@Body() createBrandDto: CreateBrandDto) {
  //   return this.brandsService.create(createBrandDto);
  // }

  @Get()
  getAll(
    @Query('limit') limit: string = '10',
    @Query('page') page: string = '1',
  ) {
    const parsedPage = parseInt(page, 10);
    const parsedLimit = parseInt(limit, 10);

    if (
      isNaN(parsedPage) ||
      isNaN(parsedLimit) ||
      parsedPage < 1 ||
      parsedLimit < 1
    ) {
      throw new BadRequestException('Invalid page or limit');
    }

    if (parsedLimit > 50) {
      throw new BadRequestException('Limit must be less than or equal to 50');
    }

    return this.brandsService.getAll({
      page: parsedPage,
      limit: parsedLimit,
    });
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.brandsService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateBrandDto: UpdateBrandDto) {
  //   return this.brandsService.update(+id, updateBrandDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.brandsService.remove(+id);
  // }
}
