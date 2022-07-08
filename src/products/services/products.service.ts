import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla bla',
      price: 122,
      stock: 2,
      image: '',
    },
  ];

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(quantity?) {
    if (quantity) {
      return {
        products: this.products,
        message: `You asked for ${quantity} products`,
      };
    }
    return {
      products: this.products,
      message: 'products',
    };
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException("Product doesn't exist");
    }

    return {
      product,
      message: `Hey! My name is Obed, I want the product with id ${id}`,
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
