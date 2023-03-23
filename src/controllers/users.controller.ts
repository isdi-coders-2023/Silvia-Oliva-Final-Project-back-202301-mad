import { Response, Request, NextFunction } from 'express';
import createDebug from 'debug';
import { User } from '../entities/user';
import { Repo } from '../repository/repo.interface.js';
import { HTTPError } from '../interfaces/error.js';
import { Auth, PayloadToken } from '../services/auth.js';
const debug = createDebug('PF:controller:users');
export class UsersController {
  constructor(public repo: Repo<User>) {
    debug('Instantiate');
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

  async register(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('register:post');
      console.log(req);
      if (!req.body.email || !req.body.passwd)
        throw new HTTPError(401, 'Unauthorized', 'Invalid Email or password');
      req.body.passwd = await Auth.hash(req.body.passwd);
      const data = await this.repo.create(req.body);
      resp.status(201);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('register:post', req.body);

      if (!req.body.email || !req.body.passwd)
        throw new HTTPError(401, 'Unauthorized', 'Invalid Email or password');
      const data = await this.repo.search({
        key: 'email',
        value: req.body.email,
      });
      if (!data.length)
        throw new HTTPError(401, 'Unauthorized', 'Email not found');
      if (!(await Auth.compare(req.body.passwd, data[0].passwd)))
        throw new HTTPError(401, 'Unauthorized', 'Password not match');
      const payload: PayloadToken = {
        id: data[0].id,
        email: data[0].email,
        role: 'admin',
      };
      const token = Auth.createJWT(payload);
      const user = data[0];
      resp.status(202);
      resp.json({
        results: [token, user],
      });
      debug(token);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('update-method');

      if (!req.params.id)
        throw new HTTPError(404, 'Not found', 'Not found id user in params');

      req.body.id = req.params.id;

      const userData = await this.repo.update(req.body.id);

      resp.status(201);
      resp.json({
        results: [userData],
      });
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
