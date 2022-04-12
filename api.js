const express = require('express');
const routes = require('./routes');
const io = require("socket.io")
const App = express();

App.use(express.json());
App.use(routes);


const port = process.env.port || 3000
const Server = App.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
const ioServer = io(Server);

ioServer.on("connection",(socket)=>{
    console.log(`Se ha conectado el socket ${socket}`)
})