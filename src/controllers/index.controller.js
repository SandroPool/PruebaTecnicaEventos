import Campus from '../models/Campus.js'
import Espacios from '../models/Espacios.js'
import Docentes from '../models/Docentes.js'

const IndexController = {
    obtenerCampus: async (req, res) => {
        try {
            const listaCampus = await Campus.findAll({
                attributes: ["id", "nombre"]
            });
            return res.json(listaCampus);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: ' Internal server Error' })
        }
    },
    obtenerEspacios: async (req, res) => {
        try {
            const listaEspacios = await Espacios.findAll({
                attributes: ["id", "nombre"]
            });
            return res.json(listaEspacios);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: ' Internal server Error' })
        }
    },
    obtenerDocentes: async (req, res) => {
        try {
            const listaDocentes = await Docentes.findAll({
                include: [
                    { model: Campus, attributes: ['id'] }, // Incluir el modelo de Campus
                    { model: Espacios, attributes: ['id'] }, // Incluir el modelo de Espacios
                ],
                attributes: ['id', 'nombre','identificacion', 'codigo_docente']
            });

            return res.json(listaDocentes);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: ' Internal server Error' })
        }
    }

}

export default IndexController;
