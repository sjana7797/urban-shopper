import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  categories: z.array(z.number().int()),
  images: z.array(z.string()),
  tags: z.array(z.string()),
  brandId: z.number().int(),
  createdById: z.number().int(),
});
