
const cn = require('mysql').createConnection({
    server:'localhost',
    user:'root',
    password:'cc123456',
    database:'negocion',
    multipleStatements:true
})


const tablas = function(){
    var result = new Promise(resolve=>{
        cn.query("select table_name from information_schema.tables where table_schema='negocion'",(err,rows)=>{
            if(err){resolve(err)}else{
                var arr=[]
                rows.forEach(t => {
                    arr.push(t.table_name)
                });
                resolve(arr)
            }
        })
    })
    return result
}
const db = async function(){
    var result=await 
    tablas().then(res=>{
        if(res.errno) return []
        var sql=[]
        res.forEach(t=>{sql.push("select * from `"+t+"`")})
        sql= sql.join(";")
        var r = new Promise(resolve=>{
            cn.query(sql,(err,rows,cols)=>{
                if(err){resolve(err)}else{
                    var r=[]
                    var i=0
                    res.forEach(t=>{
                        var obj={}
                        var myCols=[]
                        cols[i].forEach(col=>{myCols.push({
                            value:col.name,text:col.name[0].toUpperCase()+col.name.slice(1,col.name.length).toLowerCase(),type:col.type,length:col.length,
                            flag:col.flag
                        })})
                        //console.log(cols[i])
                        obj.name=t;obj.items=rows[i];obj.headers=myCols
                        r.push(obj)
                        i++
                    })
                    resolve(r)
                }
            })
        })
        return r
    })
    return result
}
const login = function(param){
    var result = new Promise(resolve=>{
        var sql = "select * from empleados where seudónimo ='"+param.u+"' and contraseña = '"+param.p+"'"
        cn.query(sql,(err,rows)=>{
            if(err){resolve(err)}else{delete rows[0].Contraseña; resolve(rows[0])}
        })
    })
    return result
}
module.exports={obtenerTablas:tablas,obtenerDb:db,login:login}