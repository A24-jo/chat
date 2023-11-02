import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppRouter } from './routes';

const app = express();

// logear peticiones
app.use(morgan('dev'));

// configurar cors
app.use(cors({ origin: '*' }));

// parsear el body de las requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Configurar las rutas */
app.use(AppRouter.routes);

export default app;
