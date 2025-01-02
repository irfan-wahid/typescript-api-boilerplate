import { Request, Response } from 'express';

export function defaultMessage(req: Request, res: Response): void {
    res.status(200).send("TYPESCRIPT - BOILERPLATE");
}