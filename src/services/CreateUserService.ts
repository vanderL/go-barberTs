import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  nome: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ nome, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const user = usersRepository.create({
      nome,
      email,
      password,
    });

    console.log(user);
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
