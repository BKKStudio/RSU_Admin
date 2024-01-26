const express = require('express');
const next = require('next');
const cors = require('cors'); // Import the 'cors' package

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Allow requests from 'https://rsu-admin-3aj3whave-bkkstudio.vercel.app'
  server.use(
    cors({
      origin: 'https://rsu-admin.netlify.app',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
  );

  // Default route handling
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});