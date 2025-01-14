import { createZodDto } from 'nestjs-zod/dto';
import { createProductSchema } from './products.schema';

export class CreateProductDto extends createZodDto(createProductSchema) {}
