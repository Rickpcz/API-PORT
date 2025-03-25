import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


export const Portafolio =  sequelize.define('Portafolio',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    imgUser:{
        type:  DataTypes.STRING(),
        allowNull: true
    },
    skills: {
        type: DataTypes.TEXT()
    },
    archievements: {
        type: DataTypes.TEXT()
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},{
    tableName: 'portafolio', // Nombre de la tabla en la BD
    timestamps: false
});

