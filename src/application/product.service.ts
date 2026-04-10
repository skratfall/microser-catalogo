import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../domain/entities/product.entity';
import { IProductRepository } from '../ports/product.repository';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

/**
 * Servicio de aplicación: ProductService
 * Orquesta la lógica de negocio entre DTOs, entidades y puertos
 * No contiene lógica de dominio, solo coordina
 */
@Injectable()
export class ProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly repository: IProductRepository,
  ) {}

  /**
   * Obtener todos los productos
   */
  async getAllProducts(): Promise<Product[]> {
    return this.repository.findAll();
  }

  /**
   * Obtener producto por ID
   */
  async getProductById(id: string): Promise<Product | null> {
    return this.repository.findById(id);
  }

  /**
   * Crear un nuevo producto
   * Valida el DTO y crea la entidad de dominio
   */
  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = new Product(
      Date.now().toString(), // Simple ID generation
      dto.name,
      dto.price,
      dto.description,
    );
    return this.repository.create(product);
  }

  /**
   * Actualizar un producto existente
   */
  async updateProduct(
    id: string,
    dto: UpdateProductDto,
  ): Promise<Product | null> {
    return this.repository.update(id, dto);
  }

  /**
   * Eliminar un producto
   */
  async deleteProduct(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
