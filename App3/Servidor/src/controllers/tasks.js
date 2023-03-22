//Este archivo van a ser las funciones de las rutas establecidas en routes/tasks.js

//Importamos cosas de nuestro fichero database
const { queryDatabase, connection } = require('../database');

export const getTasks = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    queryDatabase('SELECT * FROM tasks', null,
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            res.status(200).send(JSON.stringify(results, null, 3));
        }
    );

}

export const getTaskCount = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    queryDatabase('SELECT * FROM tasks WHERE id = ', [req.params.id],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            res.status(200).send(JSON.stringify(results, null, 3));
        }
    );
}

export const getTask = (req, res) => {
    res.send("Hola mundo react desde server");
}

export const saveTask = (req, res) => {
    res.send("Hola mundo react desde server");
}

export const deleteTask = (req, res) => {
    res.send("Hola mundo react desde server");
}

export const updateTasks = (req, res) => {
    res.send("Hola mundo react desde server");
}
