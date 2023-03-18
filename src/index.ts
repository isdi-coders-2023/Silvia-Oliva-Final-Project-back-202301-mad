import http from 'http';
import { app } from './app.js';
import { dbConnect } from './db/db.connect.js';
import createDebug from 'debug';
const debug = createDebug('PF:index');

const PORT = process.env.PORT || 4500;

const server = http.createServer(app);

dbConnect()
  .then((mongoose) => {
    server.listen(PORT);
    debug('PF:', mongoose.connection.db.databaseName);
  })
  .catch((error) => server.emit('error', error));

server.on('listening', () => {
  debug('Listening in http://localhost:' + PORT);
});
