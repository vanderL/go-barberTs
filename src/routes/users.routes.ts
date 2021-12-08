import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

/**
 * Repositories
 * Services
 */

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      nome: name, email, password,
    });
    // @ts-expect-error
    delete user.password;

    return response.json(user);
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return response.status(400).json({ error: errorMessage });
  }
});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  try {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    // @ts-expect-error
    delete user.password;

    return response.json(user);
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return response.status(400).json({ error: errorMessage });
  }
});

export default usersRouter;
