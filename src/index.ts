import routes from '../src/routes';

// EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');

// I/O
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.routes = routes(app);

// HTTP SERVER
const port = process.env.PORT || '8888'
import http from 'http';
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`API started at http://localhost:${port}`);
});
