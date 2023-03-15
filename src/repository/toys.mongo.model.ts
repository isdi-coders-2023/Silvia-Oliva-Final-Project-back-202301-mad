import { Schema, model } from 'mongoose';
import { Toy } from '../entities/toy.js';

const userSchema = new Schema<Toy>({
  name: {
    type: String,
    required: true,
  },
  animalModel: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
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
    required: true,
  },
});

userSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.passwd;
  },
});

export const ToyModel = model('toy', userSchema, 'toys');
