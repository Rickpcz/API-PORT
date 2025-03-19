import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        logging: false, // Desactiva el logging de SQL en consola (opcional)
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('🟢 Conexión exitosa a la base de datos MySQL');
        await sequelize.sync();
        console.log('✅ Modelos sincronizados con la base de datos');
    } catch (error) {
        console.error('🔴 Error al conectar con la base de datos:', error);
    }
})();

export default sequelize;
