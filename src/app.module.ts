import { Module } from '@nestjs/common';
import { ProductController } from './adapters/product.controller';
import { ProductHandler } from './handlers/product.handler';
import { ProductService } from './application/product.service';
import { ProductRepositoryImpl } from './adapters/product.repository.impl';

/**
 * Módulo principal de la aplicación
 * Organiza y registra todos los componentes:
 * - Controllers (adaptadores de entrada HTTP)
 * - Handlers (adaptadores de entrada por mensajería)
 * - Services (casos de uso de aplicación)
 * - Repositories (adaptadores de salida)
 */
@Module({
  imports: [],
  controllers: [ProductController, ProductHandler],
  providers: [
    ProductService,
    {
      provide: 'IProductRepository',
      useClass: ProductRepositoryImpl,
    },
  ],
})
export class AppModule {}
