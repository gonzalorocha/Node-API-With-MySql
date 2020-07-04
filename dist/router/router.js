"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/', (req, res) => {
    const query = ` SELECT * FROM PERSONS `;
    mysql_1.default.executeQuery(query, (err, persons) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                persons: persons
            });
        }
    });
    res.json({
        ok: true,
        mensaje: 'Todo esta ok'
    });
});
router.get('/otro/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        id: id,
        mensaje: 'Todo esta ok'
    });
});
exports.default = router;
