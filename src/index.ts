import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Color, ElementType, Tactic } from './model';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

console.log(port)

app.get('/', (req: Request, res: Response) => {
  const tactic: Tactic = {
    id: 1,
    elements: [{
      id:1,
      name: 'Player 1',
      position: {
        x: 10,
        y: 10
      },
      type: ElementType.PLAYER,
      attributes: {
        arrow: null,
        color: Color.RED
      }

    }]
  }
  res.send(tactic);
});

app.listen(port, () => {
  console.log(`⚡️[server] : Server is running at http://localhost:${port}`);
});