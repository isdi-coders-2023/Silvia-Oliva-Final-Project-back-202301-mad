import mongoose from 'mongoose';
import { ToyModel } from './toys.mongo.model.js';
import { ToysMongoRepo } from './toys.mongo.repo.js';

jest.mock('./toys.mongo.model');

describe('Given the Toys Repo ', () => {
  const repo = ToysMongoRepo.getInstance();
  describe('When its called ', () => {
    test('Then it should be instanced ', () => {
      expect(repo).toBeInstanceOf(ToysMongoRepo);
    });
  });

  describe('When query is used ', () => {
    test('Then it should return the list of toys', async () => {
      (ToyModel.find as jest.Mock).mockResolvedValue([]);
      const result = await repo.query();

      expect(ToyModel.find).toHaveBeenCalled();
      expect(result).toEqual([]);
      mongoose.disconnect();
    });
  });

  describe('When the method queryID is used ', () => {
    test('Then it should return a toy ', async () => {
      (ToyModel.findById as jest.Mock).mockResolvedValue({ id: '1' });
      const id = '1';
      const result = await repo.queryId(id);
      expect(ToyModel.findById).toHaveBeenCalled();
      expect(result).toEqual({ id: '1' });
      mongoose.disconnect();
    });
  });
  describe('When the method queryId is use....', () => {
    test('Then it should throw an error ', async () => {
      (ToyModel.findById as jest.Mock).mockResolvedValue(undefined);
      const id = '2';
      expect(async () => repo.queryId(id)).rejects.toThrow();
      expect(ToyModel.findById).toHaveBeenCalled();
      mongoose.disconnect();
    });
  });
  describe('When the search method is used', () => {
    test('Then, it should return the searched mocked data', async () => {
      const mock = { id: '2' };
      (ToyModel.find as jest.Mock).mockResolvedValue(mock);
      const result = await repo.search({
        key: 'some',
        value: 'xd',
      });
      expect(ToyModel.find).toHaveBeenCalled();
      expect(result).toEqual(mock);
      mongoose.disconnect();
    });
  });

  describe('when the method create is used  ', () => {
    test('Then it should create the toy', async () => {
      (ToyModel.create as jest.Mock).mockResolvedValue([{ email: '2' }]);

      const mockToy = {
        name: 'pepe',
        animalModel: 'pepe',
        height: 'pepe',
        artist: 'pepe',
        description: 'pepe',
        img: 'pepe',
        email: '2',
      };
      const result = await repo.create(mockToy);
      expect(ToyModel.create).toHaveBeenCalled();
      expect(result).toEqual([mockToy]);
      mongoose.disconnect();
    });
  });

  describe('when the method updated is used  ', () => {
    test('Then it should update the property of choice of the id updated ', async () => {
      (ToyModel.findByIdAndUpdate as jest.Mock).mockResolvedValue({
        id: '2',
        name: 'pepe',
      });
      const mockToy = {
        id: '2',
        name: 'pepe',
      };
      const result = await repo.update(mockToy);

      expect(ToyModel.findByIdAndUpdate).toHaveBeenCalled();
      expect(result).toEqual({
        id: '2',
        name: 'pepe',
      });
      mongoose.disconnect();
    });
  });

  describe('when the method updated is used when the id you.... ', () => {
    test('Then it should throw an error 402', async () => {
      (ToyModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(undefined);
      const mockToy = {
        id: '1',
      };

      expect(() => repo.update(mockToy)).rejects.toThrow();
      expect(ToyModel.findByIdAndUpdate).toHaveBeenCalled();
      mongoose.disconnect();
    });
  });

  describe('Given the delete method ', () => {
    test('Then it should delete the toy for sure ', async () => {
      (ToyModel.findByIdAndDelete as jest.Mock).mockResolvedValue([{}]);
      await repo.destroy('1');
      expect(ToyModel.findByIdAndDelete).toHaveBeenCalled();
    });
    test('Then it should delete the toy ', () => {
      (ToyModel.findByIdAndDelete as jest.Mock).mockResolvedValue(undefined);
      const mockToy = '1';

      expect(() => repo.destroy(mockToy)).rejects.toThrow();
      expect(ToyModel.findByIdAndDelete).toHaveBeenCalled();
      mongoose.disconnect();
    });
  });
});
