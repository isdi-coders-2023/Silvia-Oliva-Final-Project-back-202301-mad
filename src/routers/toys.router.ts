import { Router } from 'express';
import { ToysController } from '../controllers/toys.controller.js';
import { ToysMongoRepo } from '../repository/toys.mongo.repo.js';
import createDebug from 'debug';
import { logged } from '../interceptors/logged.js';
const debug = createDebug('PF:router:products');
// eslint-disable-next-line new-cap
export const toysRouter = Router();
debug('loaded');
const repo = ToysMongoRepo.getInstance();
const controller = new ToysController(repo);
toysRouter.get('/all', controller.getAll.bind(controller));
toysRouter.get('/:id', controller.getById.bind(controller));
toysRouter.post('/add', controller.create.bind(controller));
toysRouter.patch('/change', controller.update.bind(controller));
toysRouter.delete('/:id', controller.delete.bind(controller));
// ToysRouter.get(
//   '/gallery',
//   controller.getByFilterWithPaginationAndOrder.bind(controller)
// );
// toysRouter.get('/count', controller.countFilteredRecords.bind(controller));
