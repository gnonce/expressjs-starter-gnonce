import app from './lib/server';
import { logger } from './utils/logger';

const PORT = parseInt(process.env.PORT, 10) || 2500;
const HOST = process.env.HOST || '0.0.0.0';

const start = () => {
  app.listen(PORT, HOST, () => {
    logger.log({
      level: 'info',
      message: `REST API listening on port ${PORT}`,
    });
  });
};

start();
