import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { FileModule } from './file/file.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    FileModule,
    ProductsModule,
    BrandsModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
