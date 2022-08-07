import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products Categories')
@Controller()
export class CategoriesController {}
