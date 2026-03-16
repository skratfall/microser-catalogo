import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDto } from '../../application/dto/create-product.dto';
import { UpdateProductDto } from '../../application/dto/update-product.dto';

@Controller()
export class ProductHandler {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('products.getAll')
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @MessagePattern('products.getById')
  async getProductById(data: { id: string }) {
    return this.productService.getProductById(data.id);
  }

  @MessagePattern('products.create')
  async createProduct(dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @MessagePattern('products.update')
  async updateProduct(data: { id: string; dto: UpdateProductDto }) {
    return this.productService.updateProduct(data.id, data.dto);
  }

  @MessagePattern('products.delete')
  async deleteProduct(data: { id: string }) {
    return this.productService.deleteProduct(data.id);
  }
}