import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Herramienta =  sequelize.define('Herramienta',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    herramienta:{
        type:  DataTypes.STRING(100),
        allowNull: true
    },
    portafolioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'portafolio',
            key: 'id'
        }
    }
},{
    tableName: 'herramientas', // Nombre de la tabla en la BD
    timestamps: false
});