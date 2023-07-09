const express = require('express');
const morgan = require('morgan')
const activitieRouter = require('./routes/index.js');
const router = require('./routes/index.js');
const membershipRouter = require('./routes/membership.routes.js');

const server = express();


server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//  Routes

server.use(router)
server.use('/activitie', activitieRouter);
server.subscribe('/membership', membershipRouter);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;