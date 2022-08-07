import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import config from './config';
import { CategoriesController } from './products/controllers/categories.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './enviroment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    ProductsModule,
    UsersModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [CategoriesController, AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (httpService: HttpService) => {
        const tasks$ = await httpService.get(
          'https://jsonplaceholder.typicode.com/todos'
        );

        const finalTasks = lastValueFrom(tasks$);
        return (await finalTasks).data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
