DROP DATABASE IF EXISTS cookbook_db;
CREATE DATABASE cookbook_db;

USE cookbook_db;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    email VARCHAR (45) NOT NULL
    pass VARCHAR (30) NOT NULL,
    ON DELETE SET NULL
);