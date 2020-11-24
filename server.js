const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
//helpers


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'señor presidente bongo',


    });
});
app.get('/abaut', (req, res) => {
    res.render('abaut', {


    });
});





app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});