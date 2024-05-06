CREATE DATABASE student;
use student;

CREATE TABLE students(
    StudentID int not null AUTO_INCREMENT,
    FirstName varchar(255) not null,
    LastName varchar(255) not null,
    PRIMARY KEY (StudentID)
);
