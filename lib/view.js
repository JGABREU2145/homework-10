var inq = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guernica4*",
    database: "company_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //viewAllEmployees();
  });

exports.viewAllEmployees = () => {
   connection.query("SELECT * FROM employees", function(err,res) {
       if(err) {throw err};

       for (var i = 0; i < res.length; i++) {
           console.table([
               {
                   id: res[i]
                   
               }
           ])
       }
   })
}