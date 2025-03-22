import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Proyecto =  sequelize.define('Proyecto',{
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type:  DataTypes.STRING(100),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT()
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
    tableName: 'proyecto', // Nombre de la tabla en la BD
    timestamps: false
});

