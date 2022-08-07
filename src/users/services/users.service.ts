import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { ProductsService } from 'src/products/services/products.service';
import { Order } from '../entities/order.entity';

@Injectable()
export class UsersService {
  constructor(private productService: ProductsService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  getOrdersByUser(id: number) {
    const user = this.findOne(id);
    const products = this.productService.findAll();
    return {
      date: new Date(),
      user,
      products,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
