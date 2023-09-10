import { Injectable } from '@nestjs/common';
import { KnexService } from '../database/knex.service';

@Injectable()
export class UsersService {
  constructor(private readonly knexService: KnexService) {}

  async findAll() {
    const knex = this.knexService.getKnex();
    return knex('users').select('*');
  }

  async findOne(id: number) {
    const knex = this.knexService.getKnex();
    return knex('users').where({ id }).first();
  }

  async create(user: any) {
    const knex = this.knexService.getKnex();
    return knex('users').insert(user);
  }

  async update(id: number, user: any) {
    const knex = this.knexService.getKnex();
    return knex('users').where({ id }).update(user);
  }

  async remove(id: number) {
    const knex = this.knexService.getKnex();
    return knex('users').where({ id }).del();
  }
}
