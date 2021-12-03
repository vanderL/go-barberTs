import { Router } from 'express';

import AuthenticateUsersService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUsersService();

    const { user } = await authenticateUser.execute({
      email, password,
    });
    // @ts-expect-error
    delete user.password;

    return response.json({ user });
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return response.status(400).json({ error: errorMessage });
  }
});

export default sessionsRouter;
