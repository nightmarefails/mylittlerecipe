DROP DATABASE IF EXISTS cookbook_db;
CREATE DATABASE cookbook_db;

USE cookbook_db;


CREATE TABLE user_recipe (
    id INT AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    recipe_id INT PRIMARY KEY,
);