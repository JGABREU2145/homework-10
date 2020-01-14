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

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('John', 'Smith', 1, null),
('Jane', 'Smith', 6, 1),
('Derek', 'Fisher', 2, null);