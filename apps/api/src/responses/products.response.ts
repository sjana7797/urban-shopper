import type { Product } from '@prisma/client';

export type GetAllProductsResponse = {
  products: Product[];
  nextCursor: number | null;
  total: number;
  page: number;
};
