create database if not exists nodeDB;
-- create user 'root1'@'localhost' identified by 'root123';
GRANT ALL ON *.* TO 'root1'@'%';
use nodeDB;
create table student (id int auto_increment primary key, name varchar(20), email varchar(20), mobile varchar(20));
insert into student (name, email, mobile) values ( 'dummy name', 'dummy@email.com',000000); 