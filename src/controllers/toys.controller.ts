import { Response, Request, NextFunction } from 'express';
import createDebug from 'debug';

import { Repo } from '../repository/repo.interface.js';
import { Toy } from '../entities/toy.js';
import { ToysMongoRepo } from '../repository/toys.mongo.repo.js';
import { ToyModel } from '../repository/toys.mongo.model.js';
import { HTTPError } from '../interfaces/error.js';
const debug = createDebug('PF:controller:users');

export class ToysController {
  constructor(public repo: Repo<Toy>) {
    debug('Instantiate toy');
  }

  async getAll(_req: Request, resp: Response, next: NextFunction) {
    try {
      debug('getAll');
      const data = await this.repo.query();
      resp.json({
        results: data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('getById');
      const getId = req.params.id;
      debug(getId);

      const data = await this.repo.queryId(getId);
      resp.json({
        results: data,
      });
    } catch (error) {
      next(error);
    }
  }

  /// search create y update me faltan
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    debug('create toy');
    try {
      const toyInfo: Partial<Toy> = req.body;
      const toyData = await this.repo.create(toyInfo);
      res.status(201).json(toyData);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    debug('create toy');
    try {
      const toyInfo: Partial<Toy> = req.body;
      const toyData = await this.repo.update(toyInfo);
      res.status(201).json(toyData);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('delete');
      const deleteId = req.params.id;
      debug(deleteId);

      const data = await this.repo.destroy(deleteId);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }
}
