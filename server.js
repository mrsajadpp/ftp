const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const server = express();
const PORT = process.env.port || 3002;

server.listen(PORT, () => {
    console.log('File Transaction Server Is Online.');
})

server.use('/',  express.static('ftp'), serveIndex('ftp', { icons: true }) )