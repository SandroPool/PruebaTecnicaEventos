import { DataTypes } from 'sequelize';
import postgres from '../postgres.js';


const Espacios = postgres.sequelize.define('Espacios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {tableName: 'espacios'});

export default Espacios;
