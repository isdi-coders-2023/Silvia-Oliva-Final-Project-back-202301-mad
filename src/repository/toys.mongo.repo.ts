import createDebug from 'debug';
import { Toy } from '../entities/toy.js';
import { ToyModel } from './toys.mongo.model.js';
import { HTTPError } from '../interfaces/error.js';
import { RepoToys } from './repo.interface.js';

const debug = createDebug('PF:repo:users');
export class ToysMongoRepo implements RepoToys<Toy> {
  private static instance: ToysMongoRepo;
  public static getInstance(): ToysMongoRepo {
    if (!ToysMongoRepo.instance) {
      ToysMongoRepo.instance = new ToysMongoRepo();
    }

    return ToysMongoRepo.instance;
  }

  private constructor() {
    debug('Instantiated at constructor');
  }

  async query(): Promise<Toy[]> {
    debug('Instantiated at constructor at query method');
    const data = await ToyModel.find().populate([]);
    return data;
  }

  async queryId(id: string): Promise<Toy> {
    debug('Instantiated at constructor at queryId method');
    const data = await ToyModel.findById(id);
    if (!data) throw new HTTPError(404, 'Not found', 'Id not found in queryId');
    return data;
  }

  async search(query: { key: string; value: unknown }): Promise<Toy[]> {
    debug('Instantiated at constructor at search method');
    const data = await ToyModel.find({ [query.key]: query.value });
    return data;
  }

  async create(info: Partial<Toy>): Promise<Toy> {
    debug('Instantiated at constructor at create method');
    const data = await ToyModel.create(info);
    return data;
  }

  async update(info: Partial<Toy>): Promise<Toy> {
    debug('Instantiated at constructor at update method');
    const data = await ToyModel.findByIdAndUpdate(info.id, info, {
      new: true,
    });
    if (!data)
      throw new HTTPError(404, 'Record not found', 'Id not found in update');
    return data;
  }

  async destroy(id: string): Promise<void> {
    debug(id);
    const data = await ToyModel.findByIdAndDelete(id);
    if (!data)
      throw new HTTPError(
        404,
        'Not found',
        'Delete not possible: id not found'
      );
  }
}
