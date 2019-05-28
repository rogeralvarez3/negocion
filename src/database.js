const cn = require('mysql').createConnection({
    server:'localhost',
    user:'root',
    password:'cc123456',
    database:'negocion'
})

const consultar =  function(tabla,condición){
    if(condición.length>0){condición= " where "+condición}
    var sql = "select * from `"+tabla+"`"+condición
    var result= async ()=>{cn.query(sql,(error,rows)=>{
        if(error){return error}
        else{return rows}
    })}
    result = await result
    return result
}


export default {consultar}