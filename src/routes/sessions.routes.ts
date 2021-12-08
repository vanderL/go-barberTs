import { Router } from 'express';

import AuthenticateUsersService from '../services/AuthenticateUserService';
import AppError from '../errors/AppError';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUsersService();

    const { user, token } = await authenticateUser.execute({
      email, password,
    });
    // @ts-expect-error
    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';
    let statusCode = 400;

    if (err instanceof AppError) {
      errorMessage = err.message;
      statusCode = err.statusCode;
    }

    return response.status(statusCode).json({ error: errorMessage });
  }
});

export default sessionsRouter;
