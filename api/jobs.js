const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/jobs.json'); // Adjust path as needed
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
