import express from 'express';
import IndexRoutes from './routes/index.routes.js';
import postgres from './postgres.js';
import morgan from 'morgan';
import cors from 'cors';
const app = express();


app.use(cors());
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ message: 'wuelcome' }));
app.use('/api', IndexRoutes);


postgres.connectToDatabase();
const messageServer = `SERVER LISTEN ON PORT: http://127.0.0.1:${app.get('port')}`;
app.listen(app.get('port'), _ => console.log(messageServer));

