const express = require('express');
const app = express();

const config = require('../config.js');
const user = require('./components/user/network');

//Routers
app.use('/api/user', user);

//Servidor activo
app.listen(config.api.port, () => {
    console.log(`Servidor corriendo en el puerto => ${config.api.port}`);
});

console.log('');