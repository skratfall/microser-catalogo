import { Module } from '@nestjs/common';
import { ProductController } from './infrastructure/controllers/product.controller';
import { ProductHandler } from './infrastructure/handlers/product.handler';
import { ProductService } from './application/services/product.service';
import { ProductRepositoryImpl } from './infrastructure/repositories/product.repository.impl';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductHandler,
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryImpl,
    },
  ],
})
export class AppModule {}
