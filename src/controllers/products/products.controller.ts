import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateProductDTO } from 'src/DTOs/Products/CreateProduct.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query() { quantity }) {
    if (quantity) {
      return {
        message: `You asked for ${quantity} products`,
      };
    }
    return {
      message: 'products',
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Hey! My name is Obed, I want the product with id ${productId}`,
    };
  }

  @Post()
  createProduct(@Body() payload: CreateProductDTO) {
    try {
      return {
        title: 'Create action',
        message: 'We have created a new product',
        payload,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to create product',
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
