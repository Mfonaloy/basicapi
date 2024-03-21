const mysql = require('mysql2');
const { Connection } = require('mysql2/typings/mysql/lib/Connection');
const Pool =- mysql.createPool({
    connectionLimit: 18,
    host: 'localhost',
    user: 'root',
    password:'',
    database:'user_database'

})


app.get('/users',(req,res)=>{
    Pool.getConnection((err,Connection)=>{
        if(err){
            res.send("error connecting to database")
            console.log(err);
            return;
        }
        Connection.query('select * from user_table',(err))
    })
})