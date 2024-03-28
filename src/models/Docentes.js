import { DataTypes } from 'sequelize';
import postgres from '../postgres.js';
import Campus from './Campus.js';
import Espacios from './Espacios.js';


const Docentes = postgres.sequelize.define('Docentes', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    codigo_docente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, { tableName: 'docentes' });


Docentes.belongsTo(Campus, { foreignKey: 'id_campus' });
Docentes.belongsTo(Espacios, { foreignKey: 'id_espacio' });

export default Docentes;
