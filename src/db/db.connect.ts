import mongoose from 'mongoose';

import createDebug from 'debug';
import { config } from '../config.js';

const debug = createDebug('PF:DBconnect');

const { user, passwd, cluster, dbName } = config;

export const dbConnect = (env?: string) => {
  const finalEnv = env || process.env.NODE_ENV;
  const finalDBName = finalEnv === 'test' ? dbName + '_Testing' : dbName;
  const uri = `mongodb+srv://${user}:${passwd}@${cluster}/${finalDBName}?retryWrites=true&w=majority`;
  debug(uri);
  return mongoose.connect(uri);
};
