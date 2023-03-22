const mysql = require('mysql2');
//Usamos axios para ayudarnos a obtener datos de APIs públicas:
//const axios = require('axios');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tasks_app_db'
});

// Conecta a la base de datos y crea o verifica las tablas.
function conectarADataBase() {
    //Conecta a la base de datos
    connection.connect((err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Conectado a la base de datos de la app de tareas.');
    });

    // Crea la tabla tasks en la base de datos si no existe
    connection.query(`CREATE TABLE IF NOT EXISTS tasks_app_db.usuarios (
        id VARCHAR(255) NOT NULL,
        fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )`, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Tabla de usuarios creada/verificada.');
    });

    // Crea la tabla tasks en la base de datos si no existe
    connection.query(`CREATE TABLE IF NOT EXISTS tasks_app_db.tasks(
        id INT NOT NULL AUTO_INCREMENT,
        usuario_id VARCHAR(255) NOT NULL,
        title VARCHAR(100) DEFAULT "Sin título",
        description TEXT,
        PRIMARY KEY(id),
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
      )`, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Tabla tasks creada/verificada.');
    });

}

// Ejecuta una consulta en la base de datos
function queryDatabase(query, params, callback) {
    connection.query(query, params, (err, results) => {
        if (err) {
            console.error(err.message);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

// Exporta las funciones para ejecutar consultas
module.exports = {
    queryDatabase,
    conectarADataBase,
    connection
};