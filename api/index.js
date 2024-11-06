import { createServer, Model } from 'json-server';

const server = createServer();
const router = server.router('src/jobs.json'); // Path to your jobs.json file
const middlewares = server.defaults();

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});

