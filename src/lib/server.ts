/*
 * Main entry point for application. Set up server.
 */

import express from 'express';
import morgan from 'morgan';
import { Request, Response } from 'express';

// Middleware
import bodyParser from 'body-parser';

// Routes
import hello from '../routes/hello';

// Init express app
const app = express();

// Logging
app.use(morgan('combined'));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use api version 1
app.use('/api/v1', hello);

// catch all other routes
app.all('*', (request: Request, response: Response) => {
  return response.sendStatus(404);
});

export default app;
