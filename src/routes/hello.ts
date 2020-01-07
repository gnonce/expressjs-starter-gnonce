import { Router } from 'express';
import { Request, Response } from 'express';

// @ts-ignore
const apiRouter = new Router();

// @route 	POST /
// @desc 		Greetings message.
// @access  Public
apiRouter.use('/', (req: Request, res: Response) => {
  res.json({
    name: 'auction-engine',
    version: '0.2.0',
    punchline: 'Lets do some bidding!',
  });
});

export default apiRouter;
