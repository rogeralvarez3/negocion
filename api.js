const express = require("express")
const session = require('express-session')
const database=require('./src/database')
const path = require("path")
const app = express()
const cors = require("cors")
const ConnectHistoryApiFallback = require("connect-history-api-fallback")
const BodyParser = require("body-parser")
const io = require("socket.io")()

app.use(cors())
app.use(session({resave:true,saveUninitialized:false,secret:'ssshhh'}))
app.use(ConnectHistoryApiFallback())
app.use(BodyParser.json())
app.use(express.static(path.resolve(__dirname,'dist')))

const server = app.listen("3000",()=>{console.log("Servidor iniciado en http://localhost:3000/")})

app.post('/obtenerDb',(req,res)=>{
    //if(!req.session.usuario){res.send({errno:1,message:'acceso denegado en la petición'});return}
    database.obtenerDb().then(rows=>{res.send(rows)})
})
app.post('/login',(req,res)=>{
    var data=req.body
    database.login(data).then(row=>{
        if(row){
            if(!row.errno){req.session.usuario=row}
            res.send(row)
            io.emit('login',row)
        }else{
            res.send({errno:2,err_msg:'Nombre de usuario o contraseña incorrectos'})
        }
    })
})
app.post('/save',(req,res)=>{
    //if(!req.session.usuario){res.send({errno:1,message:'acceso denegado en la petición'});return}
    var data = req.body
    database.save(data).then(rows=>{
        res.send(rows)
        io.emit('save',rows)
    })
})
app.post('/delete',(req,res)=>{
    //if(!req.session.usuario){res.send({errno:1,message:'acceso denegado en la petición'});return}
    var data = req.body
    database.remove(data).then(rows=>{
        res.send(rows)
        io.emit('delete',rows)
    })
})
io.on("connection",function(socket){
    socket.emit("msg","Te haz conectado correctamente, tu id es: "+socket.id)
})

io.listen(server)