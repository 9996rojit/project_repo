import BaseError from '@/utils/error/BaseError';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, Next: NextFunction) => {
    if (err instanceof BaseError) {
        return res.send(err)
    }
    res.status(500).send(err)

};

export default errorHandler