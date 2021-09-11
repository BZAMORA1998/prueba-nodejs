import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import tiposIdentificacionRoutes from './router/tiposIdentificacion.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(tiposIdentificacionRoutes);

app.listen(8080);
console.log('Server on port', 8080);