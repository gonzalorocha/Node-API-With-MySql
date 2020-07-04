import { Router, Request, Response } from 'express';
import MySql from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    const query = ` SELECT * FROM PERSONS `;
    MySql.executeQuery(query, (err: any, persons: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                persons: persons
            })
        }
    })
    
    res.json({
        ok: true,
        mensaje: 'Todo esta ok'
    })
})

router.get('/otro/:id', (req: Request, res: Response)=>{
    const id = req.params.id;

    res.json({
        ok: true,
        id: id,
        mensaje: 'Todo esta ok'
    })
})

export default router;