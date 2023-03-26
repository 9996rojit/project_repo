import { NextFunction, Request, Response } from 'express';
import BaseError from '@/utils/error/BaseError';

const errorHandler = (err: Error, req: Request, res: Response, Next: NextFunction) => {
    if (err instanceof BaseError) {
        return res.send(err)
    }
    console.log("🚀 ~ file: errorHandler.middleware.ts:9 ~ errorHandler ~ err:", err);
    res.status(500).send(err)

};

export default errorHandler