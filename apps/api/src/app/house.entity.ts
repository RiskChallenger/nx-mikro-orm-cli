import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Project } from './project.entity';
import { SunRoof } from '@test-mikro-orm/shared';

@Entity()
export class House {

  a = SunRoof

  @PrimaryKey()
  id!: number;

  @Property()
  address!: string;

  @Property()
  bought = false;

  @ManyToOne(() => Project)
  project!: Project;

  @Property()
  createdAt = new Date();

  // @Property({ type: ModuleType})
  // modules: Module[] = [];
}
