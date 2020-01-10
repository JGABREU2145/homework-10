var mysql = require("mysql");
var inq = require("inquirer");

const addEmployee = () => {
    inq.prompt([
        {
            type: "input",
            message: "Employee First Name",
            name: "firstName"

        },
        {
            type: "input",
            message: "Employee Last Name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Employee Role",
            name: "role"
        },
        {
            type: "input",
            message: "Employee Department",
            name: "Department"
        },
    ])
}

module.exports