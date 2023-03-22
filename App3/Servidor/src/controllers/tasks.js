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
    queryDatabase('SELECT COUNT(*) FROM tasks', null,
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            //Nos devuelve un json con clave COUNT(*), así que le solicitamos el valor de esa clave
            res.status(200).send(JSON.stringify(results[0]["COUNT(*)"], null, 3));
        }
    );
}

export const getTask = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    console.log(`id obtenida: ${req.params.id}`);
    queryDatabase('SELECT * FROM tasks WHERE id = ?', [req.params.id],
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

export const saveTask = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    //${"usuario_prueba"}, ${'Circuitos'}, ${'Leer capítulo 1'}
    //["usuario_prueba", 'Circuitos', 'Leer capítulo 1']
    queryDatabase(`INSERT INTO tasks(usuario_id, title, description) VALUES (?,?,?)`, [req.body.usuario_id, req.body.title, req.body.description],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            res.status(200).send("Tarea creada exitosamente");
        }
    );
}

export const deleteTask = (req, res) => {
    queryDatabase('DELETE FROM tasks WHERE id = ?', [req.params.id],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            res.status(204).send(JSON.stringify(results, null, 3));
        }
    );
}

export const updateTasks = (req, res) => {
    queryDatabase(`UPDATE tasks SET ? WHERE id = ?`, [req.body, req.params.id],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error interno del servidor al obtener datos de la base de datos");
                return;
            }
            console.log(results);
            res.status(204).send("Tarea actualizada exitosamente");
        }
    );
}
