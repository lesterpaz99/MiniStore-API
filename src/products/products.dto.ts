/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsNotEmpty, IsUrl, IsPositive, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber({ allowNaN: false })
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  readonly stock: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}


export class UpdateProductDto extends PartialType(CreateProductDto) {}
