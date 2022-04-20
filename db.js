const mysql = require("mysql");

let cn;
function conectar(){
    cn = mysql.createConnection({
        host: "localhost",
        database: "negocion",
        user: "root",
        password: "Cc123456@"
    })
    cn.on("error",err=>{
        console.error("Error al conectar");
        console.log(err)
        console.info("reconectando...")
        conectar()
    })
}
conectar();
const mostrar = (params,callback)=>{
    let sql = `select ${params.campos?params.campos:'*'} from ${params.tabla}${params.condición?' where '+params.condición:''}`;
    cn.query(sql,(err,result)=>{
        err?callback(err):callback(result)
    })
}

module.exports ={mostrar}