import { Module } from "@nestjs/common";
import { HealthService } from "./health.service";
import { HealthController } from "./health.controller";
import { ProductsModule } from "../products/products.module";
import { BrandsModule } from "../brands/brands.module";

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [ProductsModule, BrandsModule],
})
export class HealthModule {}
