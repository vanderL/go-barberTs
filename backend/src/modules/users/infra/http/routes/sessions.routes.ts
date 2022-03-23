import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUsersService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUsersService);

  const { user, token } = await authenticateUser.execute({
    email, password,
  });
  // delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
