import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Area = sequelize.define('Area', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'area',  // Nombre de la tabla en la BD
    timestamps: false    // Evita que Sequelize agregue createdAt y updatedAt
});

export default Area;
