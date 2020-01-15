var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");
;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guernica4*",
    database: "company_db"
});

exports.updateRole = () => {
    view.getAllEmployees(function(employeeResults) {
        var employees = [];
        for (var i = 0; i < employeeResults.length; i++) {
            var fullName = employeeResults[i].first_name +  ' ' + employeeResults[i].last_name;
            
            employees.push(fullName) 
            console.log(employees)       
        }
       
        inq.prompt([
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "employee",
                choices: employees
            }
        ])
        .then((answers) => {
            
        })

    }) 
}