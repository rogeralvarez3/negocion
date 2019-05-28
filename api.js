const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const ConnectHistoryApiFallback = require("connect-history-api-fallback")
const BodyParser = require("body-parser")
const io = require("socket.io")()

app.use(cors())
app.use(ConnectHistoryApiFallback())
app.use(BodyParser.json())
app.use(express.static(path.resolve(__dirname,'dist')))

const server = app.listen("80",()=>{console.log("Servidor iniciado en https://localhost")})

app.post('/',(req,res)=>{
    //res.send("HOLA")
})
app.post('/login',(req,res)=>{
    var data=req.body
    res.send("recibí tu petición con estos datos "+JSON.stringify(data))
})

io.on("connection",function(socket){
    socket.emit("msg","Te haz conectado correctamente, tu id es: "+socket.id)
})

io.listen(server)