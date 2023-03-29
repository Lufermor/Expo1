//Este archivo van a ser las funciones de las rutas establecidas en routes/users.js

//Importamos cosas de nuestro fichero database
const { queryDatabase, connection } = require('../database');

export const getUsers = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    queryDatabase('SELECT * FROM usuarios', null,
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

export const getUserCount = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    queryDatabase('SELECT COUNT(*) FROM usuarios', null,
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

export const getUser = (req, res) => {
    // NOTA: falta restringir la búsqueda a las task del usuario logeado (req.user.id o algo así)
    console.log(`id obtenida: ${req.params.id}`);
    queryDatabase('SELECT * FROM usuarios WHERE id = ?', [req.params.id],
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

export const saveUser = (req, res) => {
    queryDatabase(`INSERT INTO usuarios(usuario_id, title, description) VALUES (?,?,?)`, [req.body.usuario_id, req.body.title, req.body.description],
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

export const deleteUser = (req, res) => {
    queryDatabase('DELETE FROM usuarios WHERE id = ?', [req.params.id],
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

export const updateUsers = (req, res) => {
    queryDatabase(`UPDATE usuarios SET ? WHERE id = ?`, [req.body, req.params.id],
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
