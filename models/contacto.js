import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Contacto =  sequelize.define('Contacto',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    telefono:{
        type:  DataTypes.STRING(20),
        allowNull: true
    },
    linkedin: {
        type: DataTypes.STRING(255)
    },
    github: {
        type: DataTypes.STRING(255)
    },
    correo: {
        type: DataTypes.STRING(255)
    }

    
},{
    tableName: 'contacto', // Nombre de la tabla en la BD
    timestamps: false
});

