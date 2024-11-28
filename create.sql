DROP DATABASE IF EXISTS collegedb;
CREATE DATABASE IF NOT EXISTS collegedb;
USE collegedb;
CREATE TABLE department (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL
);


CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    title VARCHAR(255),
    photo_path VARCHAR(255) NOT NULL,
    dept_id INT
);


CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(255) UNIQUE NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    course_description VARCHAR(255),
    course_year INT NOT NULL,
    course_credits INT NOT NULL,
    course_term INT NOT NULL,
    course_capacity INT NOT NULL,
    employee_id INT
);

CREATE TABLE course_schedule (
    course_schedule_id INT PRIMARY KEY AUTO_INCREMENT,
    course_time VARCHAR(255) NOT NULL,
    course_day VARCHAR(255) NOT NULL,
    room VARCHAR(255) NOT NULL,
    building VARCHAR(255),
    course_id INT
);


