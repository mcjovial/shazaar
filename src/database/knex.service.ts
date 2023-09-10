import { Injectable } from '@nestjs/common';
import knex from 'knex';
import * as knexfile from '../../knexfile';

@Injectable()
export class KnexService {
  private readonly _knex: any;

  constructor() {
    this._knex = knex({
      ...knexfile.development,
      migrations: { directory: 'src/database/migrations' },
    });
  }

  getKnex() {
    return this._knex;
  }
}
