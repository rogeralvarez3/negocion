const express = require("express")
const app = express()
const cors = require("cors")
const ConnectHistoryApiFallback = require("connect-history-api-fallback")
const BodyParser = require("body-parser")
const io = require("socket.io")()

app.use(cors())
app.use(ConnectHistoryApiFallback())
app.use(BodyParser.json())

const server = app.listen("3000",()=>{console.log("Servidor iniciado en https://localhost:3000")})

app.post('/',(req,res)=>{
    res.send("HOLA")
})
app.post('/login',(req,res)=>{
    var data=req.body
    res.send("recibí tu petición con estos datos "+JSON.stringify(data))
})

io.on("connection",function(socket){
    socket.emit("msg","Te haz conectado correctamente, tu id es: "+socket.id)
})

io.listen(server)