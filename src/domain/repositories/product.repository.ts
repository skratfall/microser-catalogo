import { Product } from '../entities/product.entity';

/**
 * Puerto (Interface) del repositorio de productos
 * Define el contrato que deben cumplir todos los adaptadores
 * Principio Hexagonal: Define el contrato sin conocer la implementación
 */
export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByCategory(category: string): Promise<Product[]>;
  findBySku(sku: string): Promise<Product | null>;
  search(query: string): Promise<Product[]>;
  create(product: Product): Promise<Product>;
  update(id: string, product: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
  softDelete(id: string): Promise<Product | null>;
  updateStock(id: string, quantity: number): Promise<Product | null>;
  findLowStock(threshold: number): Promise<Product[]>;
  findByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>;
  bulkCreate(products: Product[]): Promise<Product[]>;
  getTopRated(limit: number): Promise<Product[]>;
}
