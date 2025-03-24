import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Habilidad =  sequelize.define('Habilidad',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    habilidad:{
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
    tableName: 'habilidades_blandas', // Nombre de la tabla en la BD
    timestamps: false
});