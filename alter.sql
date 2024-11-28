

ALTER TABLE employees
ADD CONSTRAINT fk_employees_department
FOREIGN KEY (dept_id)
REFERENCES department(department_id);

ALTER TABLE courses
ADD CONSTRAINT fk_courses_employee
FOREIGN KEY (employee_id)
REFERENCES employees(employee_id);

ALTER TABLE course_schedule
ADD CONSTRAINT fk_courseschedule_courses
FOREIGN KEY (course_id)
REFERENCES courses(course_id);
