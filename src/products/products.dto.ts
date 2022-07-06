/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber({ allowNaN: false })
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
}


export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber({ allowNaN: false })
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
}
