const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const port = 3000;

app
.use(helmet())
.use(morgan('dev'))
.use(compression())
.use(express.static('public'))

app.listen(port, () => console.log(`Listening on port ${port}!`));
