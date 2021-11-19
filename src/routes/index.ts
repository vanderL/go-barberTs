import { Router } from 'express';
import appoimentsRouter from './appointments.routes';

const routes = Router();
routes.use('/appointments', appoimentsRouter);

export default routes;
