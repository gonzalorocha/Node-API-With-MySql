"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Utilizamos el patron singleton
const mysql = require("mysql");
class MySql {
    constructor() {
        this.conected = false;
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'persons'
        });
        this.connect();
    }
    static get instance() {
        return this._instance || (this._instance = new this);
    }
    static executeQuery(query, callback) {
        console.log('1===============');
        this.instance.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log('Error en query ', err);
                return callback(err);
            }
            console.log('2===============');
            if (res.length === 0) {
                callback('Registro no existente');
            }
            else {
                callback(null, res);
            }
        });
    }
    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
            }
            this.conected = true;
            console.log('base de datos conectada');
        });
    }
}
exports.default = MySql;
