import express from 'express';
const app = express();

import { api } from '../config.js';
import user from './components/user/network.js';

//Routers
app.use('/api/user', user);

app.listen(api.port, () => {
    console.log(`Servidor corriendo en el puerto => ${api.port}`);
});

console.log('');