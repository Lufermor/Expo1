//Posible build sugerido por tabnine: "build": "webpack --config webpack.config.js"
import app from './app';

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});