const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: "localhost",
  password: process.env.PASSWORD,
  connectionLimit: 10,
});


console.log(process.env.DATABASE)
// dbConnection.execute("select 'test' ", (err, ressult) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(ressult);
//   }
// });
module.exports = dbConnection.promise();
