


INSERT INTO employees (email, password, first_name, last_name, title, photo_path, dept_id)
VALUES
('employee1@example.com', 'password1', 'John', 'Doe', 'Mr', '/photos/1.jpg', 2),
('employee2@example.com', 'password2', 'Jane', 'Smith', 'Ms', '/photos/2.jpg', 2),
('employee3@example.com', 'password3', 'Bob', 'Johnson', 'Mr', '/photos/3.jpg', 2),
('employee4@example.com', 'password4', 'Alice', 'Williams', 'Ms', '/photos/4.jpg', 2),
('employee5@example.com', 'password5', 'Charlie', 'Brown', 'Mr', '/photos/5.jpg', 2);


INSERT INTO department (dept_name, Capacity) VALUES
('Admission', 50),
('Faculty', 100),
('Placement', 10);

INSERT INTO courses (course_code, course_name, course_description, course_year, course_credits, course_term, course_capacity)
VALUES
    ('CS-511', 'Algorithms', NULL, 2022, 4, 1, 150),
    ('CS-512', 'Concrete Mathematics', NULL, 2022, 4, 1, 150),
    ('CS-513', 'Software Systems', NULL, 2022, 4, 1, 150),
    ('AI-511', 'Machine Learning', NULL, 2022, 4, 1, 150),
    ('AI-512', 'Mathematics for machine learning', NULL, 2022, 4, 1, 150);

INSERT INTO course_schedule (course_time, course_day, room, building) VALUES
('09:30:00', 'Monday', 'R103', 'Ramanujan'),
('11:15:00', 'Monday', 'R103', 'Ramanujan'),
('16:00:00', 'Monday', 'R105', 'Ramanujan'),
('09:30:00', 'Tuesday', 'R203', 'Ramanujan'),
('11:15:00', 'Tuesday', 'R203', 'Ramanujan'),
('09:30:00', 'Wednesday', 'R103', 'Ramanujan'),
('11:15:00', 'Wednesday', 'R103', 'Ramanujan'),
('14:00:00', 'Wednesday', 'R103', 'Ramanujan'),
('09:30:00', 'Thursday', 'R103', 'Ramanujan'),
('11:15:00', 'Thursday', 'R103', 'Ramanujan'),
('14:00:00', 'Thursday', 'R103', 'Ramanujan'),
('09:30:00', 'Friday', 'R103', 'Ramanujan'),
('09:30:00', 'Saturday', 'R103', 'Ramanujan'),
('09:30:00', 'Monday', 'R203', 'Ramanujan');
