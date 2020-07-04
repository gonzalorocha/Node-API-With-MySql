import Server from './server/server';
import router from './router/router';
import MySql from './mysql/mysql';


const port = 3000;
const server = Server.init(port);

server.app.use(router);

//my sql instance
// MySql.instance;


server.start(() => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})



