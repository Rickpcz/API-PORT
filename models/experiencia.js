import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Experiencia =  sequelize.define('Experiencia',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    description:{
        type:  DataTypes.TEXT(),
        allowNull: true
    },
    period: {
        type: DataTypes.STRING(50)
    },
    company_name: {
        type: DataTypes.STRING(100)
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
    tableName: 'xp', // Nombre de la tabla en la BD
    timestamps: false
});

