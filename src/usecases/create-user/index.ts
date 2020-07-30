import { CreateUserController } from './create-user-dto';
import { CreateUserUseCase } from './create-user-usecase';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider';

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