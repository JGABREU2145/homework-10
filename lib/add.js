var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guernica4*",
    database: "company_db"
});

exports.addEmployee = () => {
   view.getAllRoles(function(rolesResults) {
      var roles = [];
      for(var i = 0; i < rolesResults.length; i++) {
          roles.push(rolesResults[i].title);
      }
       var options = [
        {
            type: "input",
            message: "Employee First Name",
            name: "firstName",
            default: "Justin"
        },
        {
            type: "input",
            message: "Employee Last Name",
            name: "lastName",
            default: "Abreu"
        },
        {
            type: "list",
            message: "Employee Role",
            name: "role",
            choices: roles
        }
        ];

        inq.prompt(options)
        .then((answers) => {
            var roleId = null;
            for(var i= 0; i < rolesResults.length; i++) {
                if(rolesResults[i].title === answers.role) {
                    roleId = rolesResults[i].role_id
                }
            }
            connection.query("INSERT INTO employees SET ?",
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
            function(err,results) {
                if(err) throw err;
                console.log("Successfully added " + results);
            });
        })
    });
};

        
exports.addRole = () => {
    inq.prompt([
        {
            type: "list",
            message: "Employee Role",
            name: "role",
            choices: [
                "General Manager",
                "Head Chef",
                "Sous Chef",
                "Cook",
                "Dishwasher",                
                "Front of House Manager",
                "Host",
                "Server"
            ]
        }
    ])
    .then((answer) => { 
        console.log(salary)
        connection.query("INSERT INTO company_role SET ?", 
        {
            title: answer.role,
            salary: salary                
        },
        function(err,res) {
            if(err) throw err;
            exports.addDepartment();
        });
    });
}

exports.addDepartment = () => {
    inq.prompt([
        {
        type: "list",
        message: "Employee Department",
        name: "department",
        choices: [
            "Company",
            "Back of House",
            "Front of House"
        ]    
    }    
    ])
    .then((answer) => {        
        connection.query("INSERT INTO department SET ?", 
        {
            dept_name: answer.department
        },
        function(err,res) {
            if(err) throw err;  
            app.start();              
        });
    });
};



