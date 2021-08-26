const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'prueba'
})
conexion.connect((error)=>{
    if(error) throw error 
    console.log('conexion exitorsa')
})

//Consultas
conexion.query('SELECT*FROM persona',(error, rows)=>{
    if(error) throw error 
    console.log('COnsulta de la informacion')
    console.log(rows)
})
conexion.end()
