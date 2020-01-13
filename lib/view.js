var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guernica4*",
    database: "company_db"
  });

exports.viewAllEmployees = () => {
   connection.query("SELECT * FROM employees", function(err,res) {
       if(err) {throw err};

       for (var i = 0; i < res.length; i++) {
           
        
           console.table([res[i]])
       }
    app.start();
   })
}