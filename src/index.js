const express = require('express');
const app = express();
const routes = require('./routes/users')


// middlewares
app.use(express.json()); //procesar datos de tipos json
app.use(express.urlencoded({ extended: false })); // procesar datos de formulario y datos simples
//
//routes
app.use(routes);
app.listen(3000);
console.log('Server on port 59988');

