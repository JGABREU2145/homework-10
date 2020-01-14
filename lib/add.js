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

exports.addEmployee = () => {
    inq.prompt([
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
        }
    ])
    .then((answer) => {        
        connection.query("INSERT INTO employees SET ?", 
        {
            first_name: answer.firstName,
            last_name: answer.lastName
        },
        function(err,res) {
            if(err) throw err;
            console.log(`Successfully added ${answer.firstName} ${answer.lastName} to the database!`)
            exports.addRole();
        }
    )}   
)};

        
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



