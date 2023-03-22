-- Aquí se escribe codigo nativo mysql para crear la BD
CREATE DATABASE IF NOT EXISTS tasks_app_db;

USE tasks_app_db;

CREATE TABLE IF NOT EXISTS tasks_app_db.usuarios (
  id VARCHAR(255) NOT NULL,
  fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
    
CREATE TABLE IF NOT EXISTS tasks_app_db.tasks(
  id INT NOT NULL AUTO_INCREMENT,
  usuario_id VARCHAR(255) NOT NULL,
  title VARCHAR(100) DEFAULT "Sin título",
  description TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios(id) VALUES ("usuario_prueba");

INSERT INTO tasks(usuario_id, title, description) VALUES
  ("usuario_prueba", 'Derivadas', 'Hacer tareas de derivadas'),
  ("usuario_prueba", 'Algebra', 'Realizar ejercicios de producto punto');