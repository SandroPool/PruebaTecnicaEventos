import { Sequelize } from 'sequelize';
import 'dotenv/config';

const { DATABASE_NAME, USERNAME_DB, PASSWORD_DB, HOST_DB, PORT_DB } = process.env;
const sequelize = new Sequelize(DATABASE_NAME, USERNAME_DB, PASSWORD_DB, {
    host: HOST_DB,
    dialect: USERNAME_DB,
    port: PORT_DB,
    logging: false
});

const connectToDatabase = async _ => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa', sequelize.getDatabaseName());
    } catch (error) {
        console.log('No se pudo conectar ', error);
    }
}

export default { sequelize, connectToDatabase };
