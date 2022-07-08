import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // return this.productsService.create(createProductDto);
    try {
      console.log(createProductDto);
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
  findAll() {
    try {
      return this.productsService.findAll();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to create product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.productsService.findOne(id);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unable to find this product',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ) {
    try {
      // return this.productsService.update(id, updateProductDto);
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
  remove(@Param('id', ParseIntPipe) id: number) {
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
