import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import type { ProductRepository } from '../../domain/repositories/product.repository';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = new Product(
      Date.now().toString(), // Simple ID generation
      dto.name,
      dto.price,
      dto.description,
    );
    return this.productRepository.create(product);
  }

  async updateProduct(id: string, dto: UpdateProductDto): Promise<Product | null> {
    return this.productRepository.update(id, dto);
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.productRepository.delete(id);
  }
}