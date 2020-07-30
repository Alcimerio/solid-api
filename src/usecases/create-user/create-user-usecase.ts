import { UsersRepository } from '../../repositories/UsersRepository';

import { CreateUserRequestDTO } from './create-user-dto';
import { User } from '../../entities/User';

import { MailProvider } from '../../providers/MailProvider';

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository,
    private mailProvider: MailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if(userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'MyApp Team',
        email: 'contact@myapp.com'
      },
      subject: 'Welcome to MyApp',
      body: '<p>You are now registered to the platform. Enjoy!</p>'
    })
  }
}