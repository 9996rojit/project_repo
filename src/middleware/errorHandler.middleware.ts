import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, Next: NextFunction) => {
    console.log(err)

};

export default errorHandler