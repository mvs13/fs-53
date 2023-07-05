import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repCategory: Repository<Category>,
  ) {}

  create(newCategory: CreateCategoryInput) {
    return this.repCategory.save(newCategory);
  }

  findAll() {
    return this.repCategory.find();
  }

  findOne(id: number) {
    return this.repCategory.findOneBy({ id });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.repCategory.save({ id, ...updateCategoryInput });
  }

  remove(id: number) {
    return this.repCategory.delete({ id });
  }
}
