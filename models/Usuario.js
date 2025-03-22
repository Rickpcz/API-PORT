import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    area_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'area',
            key: 'id'
        }
    }
}, {
    tableName: 'user', // Nombre de la tabla en la BD
    timestamps: false
});

// Hash de la contraseña antes de guardar el usuario
User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

export default User;
