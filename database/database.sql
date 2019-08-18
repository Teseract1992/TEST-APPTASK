CREATE DATABASE ng_tasks

USE ng_tasks

CREATE TABLE task (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255),
    estado BOOLEAN,
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE task to tasks;

DESCRIBE task;

drop table tasks


