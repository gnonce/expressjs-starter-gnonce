/*
 * Main entry point for application. Set up server.
 */

import express from "express";
import { Request, Response } from 'express'

// Middleware
import bodyParser from "body-parser";

// Routes
import hello from "../routes/hello";

// Init express app
const app = express();
const PORT = parseInt(process.env.PORT) || 2500;
const HOST = process.env.HOST || "0.0.0.0";

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use api version 1
app.use("/api/v1", hello);

// catch all other routes
app.all("*", (request: Request, response: Response) => {
  return response.sendStatus(404);
});

export const start = () => {
  app.listen(PORT, HOST, () => {
    console.log(`REST API: listening on port ${PORT}`);
  });
};

export default app;
