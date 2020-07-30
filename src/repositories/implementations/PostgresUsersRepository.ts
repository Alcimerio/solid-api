import { User } from './../../entities/User';
import { User } from '../../entities/User.ts';
import { UsersRepository } from './../UsersRepository';

export class PostgresUsersRepository implements UsersRepository {
  private users: User[] = [];

  async findByEmaill(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);
    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}