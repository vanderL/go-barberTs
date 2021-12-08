import { Router } from 'express';

import AuthenticateUsersService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUsersService();

  const { user, token } = await authenticateUser.execute({
    email, password,
  });
  // @ts-expect-error
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
