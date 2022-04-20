const express = require('express');
const routes = require('./routes');
const io = require("socket.io");
const path = require("path");
const App = express();
const cors = require("cors");
const history = require("connect-history-api-fallback");

App.use(history());
App.use(cors());
App.use(express.json());
App.use(express.static(path.join(__dirname,"dist")))
App.use(routes);


const port = process.env.port || 3000
const Server = App.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
const ioServer = io(Server);

ioServer.on("connection",(socket)=>{
    console.log(`Se ha conectado el socket ${socket}`)
})