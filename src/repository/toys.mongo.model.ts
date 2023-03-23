import { Schema, model } from 'mongoose';
import { Toy } from '../entities/toy.js';

const toySchema = new Schema<Toy>({
  name: {
    type: String,
    required: true,
  },
  animalModel: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

toySchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.passwd;
  },
});

export const ToyModel = model('toy', toySchema, 'toys');
