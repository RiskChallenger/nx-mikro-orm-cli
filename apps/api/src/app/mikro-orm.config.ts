import { Project } from './project.entity';
import { House } from './house.entity';
import { MikroORMOptions } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';

const mikroOrmConfig: Partial<MikroORMOptions<SqliteDriver>> = {
  dbName: `database-file.sqlite`,
  type: 'sqlite',
  entities: [
    Project,
    House
  ]
};

export default mikroOrmConfig;
