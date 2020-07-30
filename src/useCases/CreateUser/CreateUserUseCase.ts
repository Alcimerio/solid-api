import { User } from './../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UsersRepository } from '../../repositories/UsersRepository';

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if(userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    await this.usersRepository.save(user);
  }
}