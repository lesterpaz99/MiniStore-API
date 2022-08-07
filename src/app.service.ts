import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  getHello(): string {
    // console.log('Tasks => ', this.tasks);
    // return 'Hello World! - ' + this.apiKey;
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    return apiKey + ' - ' + dbName;
  }

  // async getTasks() {
  //   return await this.httpService.get('');
  // }
}
