import { NextFunction, Request, Response } from "express";
const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  };

// module.exports={validate}
export {validate}