import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // return this.productsService.create(createProductDto);
    try {
      return {
        title: 'Create action',
        message: 'We have created a new product',
        createProductDto,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to create product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get()
  findAll(@Query() { quantity }) {
    try {
      return this.productsService.findAll(quantity);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to create product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.productsService.findOne(+id);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to find this product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // return this.productsService.update(+id, updateProductDto);
    try {
      return {
        message: 'Product has been updated',
        id,
        updateProductDto,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to create product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.productsService.remove(+id);
    try {
      return {
        message: `The product ${id} has been removed`,
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
