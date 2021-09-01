DROP DATABASE IF EXISTS cookbook_db;
CREATE DATABASE cookbook_db;
USE cookbook_db;

CREATE TABLE tags  (
    id INT NOT NULL,
    tag_name VARCHAR(30) NOT NULL
);

CREATE TABLE recipe_tags (
    id INT NOT NULL,
    recipe_id INT NOT NULL,
    tag_id INT NOT NULL
);

CREATE TABLE recipes (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL
    description TEXT
    ingredients TEXT
    instructions TEXT
    time TEXT
    servings TEXT
    image TEXT
)
