import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';

const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController }