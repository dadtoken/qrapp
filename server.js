// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const config = require('./server/config.json');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// use JWT auth to secure api
app.use(expressJwt({ secret: config.secret }).unless({ path: ['/register', '/login', '/api/users/authenticate', '/api/users/register'] }));

// Set our api routes

app.use('/api/users', require('./server/controllers/users.controller'));
app.use('/api/objects', require('./server/controllers/objects.controller'));
app.use('/api/words', require('./server/controllers/words.controller'));
app.use('/api/feedback', require('./server/controllers/feedback.controller'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));