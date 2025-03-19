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
    tableName: 'area',
    timestamps: false 
});

export default Area;
