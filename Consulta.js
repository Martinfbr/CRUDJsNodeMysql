const mysql = require ('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'' ,
    database :'prueba'
})

conexion.connect((error)=>{
    if(error) throw error 
    console.log('Conexion Exitosa!')
})



conexion.query('SELECT * FROM persona', (error, rows)=>{
    if(error) throw error
    console.log('Consulta de la informacion de la tabla')
    console.log(rows)
})
conexion.query('SELECT * FROM producto', (error, rows)=>{
    if(error) throw error
    console.log('Consulta de la informacion de la tabla')
    console.log(rows)
})

conexion.end()