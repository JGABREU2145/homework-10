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
                "Dishwaher",                
                "Front of House Manager",
                "Host",
                "Server"
            ]
        }
    ])
    .then((answer) => { 
        var salary;
        
        if(answer.role === "General Manager") {
            salary = 70000
        }
        else if(answer.role === "Head Chef") {
            salary = 60000
        }
        else if(answer.role === "Sous Chef") {
            salary = 50000
        }
        else if(answer.role === "Cook") {
            salary = 30000
        }
        else if(answer.role === "Dishwasher") {
            salary = 22000
        }
        else if(answer.role === "Front of House Manager") {
            salary = 40000
        }
        else if(answer.role === "Host") {
            salary = 30000
        }
        else if(answer.role === "Server") {
            salary = 20000
        };
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



