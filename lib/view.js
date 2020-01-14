var mysql = require("mysql");
var app = require("../app");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guernica4*",
    database: "company_db"
  });

exports.viewAllEmployees = () => {
   connection.query("SELECT emp_id, first_name, last_name, emp_role_id, manager_id FROM employees", function(err,res) {
       if(err) {throw err}

       for (var i = 0; i < res.length; i++) {
         //   console.log(res)
          console.table([res[i]])
       }
    app.start();
   });
};

exports.viewRole = () => {
   connection.query("")
}

exports.viewDepartments = () => {
   
}