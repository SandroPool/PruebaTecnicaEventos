import { DataTypes } from 'sequelize';
import postgres from '../postgres.js';


const Campus = postgres.sequelize.define('Campus', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: 'campus' });

export default Campus;
