var mysql = require("mysql");
var inq = require("inquirer");
var table = require("console.table");
var add = require("./lib/add");
var remove = require("./lib/remove");
var update = require("./lib/update");
var view = require("./lib/view");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "Guernica4*",
  database: "company_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
    inq.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees",
                "View All Roles",
                "View Employees by Department",
                "View Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "EXIT"
                
            ]
        }
    ])
    .then(function(answers) {
      if(answers.choice === "View All Employees") {
        viewAllEmployees();
      }
      else if(answers.choice === "View All Roles") {
        viewAllRoles();
      }
      else if(answers.choice === "View Employees by Department") {
        viewEmpByDept();
      }
      else if(answers.choice === "View Employees by Manager") {
        viewEmpByMan();
      }
      else if(answers.choice === "Add Employee") {
        addEmployee();
      }
      else if(answers.choice === "Remove Employee") {
        removeEmployee();
      }
      else if(answers.choice === "Update Employee Role") {
        updateRole();
      }
      else if(answers.choice === "Update Employee Manager") {
        updateManager ();
      }
      else if(answers.choice === "EXIT") {
        connection.end();
      }
    });
    
};