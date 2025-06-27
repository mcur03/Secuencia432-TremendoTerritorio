import { Request, Response } from 'express';

const getWelcome = (_req: Request, res: Response) => {
  res.json({
    message: 'Bienvenidos a Tremendo Territorio',
    status: 'success',
    timestamp: new Date().toISOString()
  });
};

export default getWelcome