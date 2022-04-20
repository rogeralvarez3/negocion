const router = require("express").Router()
const db = require("./db.js")


router.post('/mostrar',(req,res)=>{
    db.mostrar(req.body,result=>{
        res.send(result)
    })
})
module.exports = router