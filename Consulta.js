const mysql = require('mysql')
const express = require('express')
const app = express()

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sakila'
})
conexion.connect((error)=>{
    if(error) throw error 
    console.log('conexion exitorsa')
})

app.get('/', function(req,resp){
    conexion.query('SELECT * FROM actor', function (error, rows){
        if(!!error){
            console.log('conexion fallida')
        }
        else{
            console.log('consulta de la informacion de la tabla')
            console.log(rows)
            conexion.end()
        }
    })


})
app.listen(3000)

// Consultas
// conexion.query('SELECT*FROM persona',(error, rows)=>{
//     if(error) throw error 
//     console.log('COnsulta de la informacion')
//     console.log(rows)
// })
// conexion.end()
