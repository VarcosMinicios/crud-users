export type CreateUser = Omit<User, 'created_at' | 'updated_at'>;

export interface User {
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}
