//Utilizamos el patron singleton
import mysql = require('mysql');




export default class MySql {
    private static _instance: MySql;
    
    connection: mysql.Connection;
    conected: boolean = false; 

    constructor() {
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'persons'
        });
        this.connect();
    }

    public static get instance() {
        return this._instance || (this._instance = new this);
    }

    static executeQuery( query: string, callback: Function) {
        this.instance.connection.query(query, (err, res: Object[], fields) => {
            if (err) {
                console.log('Error en query ', err);
                return callback(err);
            }
            if (res.length === 0) {
                callback('Registro no existente');
            } else {
                callback(null, res);
            }
        })
    }

    private connect () {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
            }

            this.conected= true;
            console.log('base de datos conectada')
        })
    }



}