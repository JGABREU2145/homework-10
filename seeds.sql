DROP DATABASE IF EXISTS company_db;
CREATE database company_db;

USE company_db;

CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);

CREATE TABLE company_role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(7,2) NOT NULL,
    dept_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employees (
    emp_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    emp_role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (emp_id),
    FOREIGN KEY (emp_role_id) REFERENCES company_role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
);

INSERT INTO department (dept_name) VALUES ('Back of House'), ('Front of House'), ('Management');
INSERT INTO company_role (title, salary, dept_id) VALUES
('General Manager', 70000.00, 3), 
('Head Chef', 60000.00, 1),
('Sous Chef', 50000.00, 1),
('Cook', 30000.00, 1 ),
('Dishwasher', 20000.00, 1),                
('Front of House Manager', 40000.00, 2),
('Host', 30000.00, 2),
('Server', 20000.00, 1);