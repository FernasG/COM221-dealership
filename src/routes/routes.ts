import { Router, Request, Response } from "express";

const router = Router();

router.get('', (req: Request, res: Response) => { 
    res.render('Home');
});

export default router;