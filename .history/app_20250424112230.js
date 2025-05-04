const mysql2=require('mysql2');
const dbConnection=mysql2.createPool({
    user:"evangadi-admin",
    database:"evangadi-db",
    host:"localhost",
    password:"",
    connectionLimit:10
})