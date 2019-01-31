import express from 'express';
import React from 'react';
import App from './components/App';
import Html from './client/Html';
import { renderToString } from 'react-dom/server';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  const body = renderToString(<App />);
  const title = 'Kumar Abhirup';
  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);