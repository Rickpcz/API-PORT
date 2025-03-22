import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import routes from './routes/routes.js';
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

// Rutas
app.use('/api', routes); 

(async () => {
    try {
        await sequelize.authenticate();
        console.log('🟢 Conexión exitosa a la base de datos MySQL');
        await sequelize.sync({ alter: true });
        console.log('✅ Modelos sincronizados con la base de datos');
    } catch (error) {
        console.error('🔴 Error al conectar con la base de datos:', error);
    }
})();


app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Portafolio');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Ocurrió un error en el servidor' });
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});