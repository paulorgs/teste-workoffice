const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
//var dogs = require('../modelo_lista_caes.json');
//var cats = require('../modelo_lista_gatos.json');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/dogsController')(app);
require('./controllers/catsController')(app);


app.listen(3000);