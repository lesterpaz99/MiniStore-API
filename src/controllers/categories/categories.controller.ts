import {
  Get,
  Param,
  Controller,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductByCategory(
    @Param() { categoryId, productId },
    @Query('color') color: string,
  ): string {
    try {
      return `This product ${productId} owns to the category ${categoryId} with is ${color}`;
    } catch (error) {
      console.log(error);
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
