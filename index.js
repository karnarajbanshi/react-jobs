const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'jobs.json')); // Point to your jobs.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
