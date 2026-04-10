import { Injectable } from '@nestjs/common';
import { Product } from '../domain/entities/product.entity';
import { IProductRepository } from '../ports/product.repository';

/**
 * Adaptador: ProductRepositoryImpl
 * Implementación concreta del puerto IProductRepository
 * En un proyecto real, esto conectaría con una base de datos
 * Por ahora usa memoria (in-memory storage)
 */
@Injectable()
export class ProductRepositoryImpl implements IProductRepository {
  // En memoria (en producción usar BD real)
  private products: Product[] = [];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((p) => p.id === id) || null;
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async update(id: string, updates: Partial<Product>): Promise<Product | null> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
