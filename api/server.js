const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use([helmet(), express.json(), cors(), morgan('dev')]);

server.use('/', (res, req) => {
    res.send('Hello World')
})

module.exports = server