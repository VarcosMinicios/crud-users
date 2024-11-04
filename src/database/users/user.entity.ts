import {
  Entity,
  Property,
  PrimaryKey,
  type Opt,
} from '@mikro-orm/core';

@Entity()
export class User {

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property({ unique: true })
  email: string;

  @Property({ hidden: true, })
  password?: string;

  @Property()
  created_at: Date & Opt = new Date();

  @Property({ onUpdate: () => new Date() })
  updated_at: Date & Opt = new Date();

  constructor(name: string, email: string, password?: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
