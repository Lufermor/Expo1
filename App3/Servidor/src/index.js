import app from './app';
//Importamos cosas de nuestro fichero database
const { conectarADataBase } = require('./database');

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

conectarADataBase();