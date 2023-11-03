import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export function catchErrorsExValidator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }
    return next()
}
