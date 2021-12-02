import { Router } from 'express';
import appoimentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();
routes.use('/appointments', appoimentsRouter);
routes.use('/users', usersRouter);

export default routes;
