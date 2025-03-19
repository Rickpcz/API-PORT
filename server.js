require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Importa la conexión a MySQLlas rutas

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' })); // Configuración de CORS
app.use(express.json()); // Parseo de JSON

// Probar conexión a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Rutas
// app.use('/api', routes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Portafolio');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Ocurrió un error en el servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});