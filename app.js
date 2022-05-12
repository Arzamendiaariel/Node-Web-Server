const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//servir contenido estático
app.use(express.static('public')); // busca index.html, si lo renombramos a otra cosa no lo encuentra

//primero busca el contenido de las carpetas y despues si no encuenta va a las rutas comunes
//el nombre de las carpetas es el nombre de la ruta

//esta linea no se esta ejecutando por eso la comentamos
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Ariel Arzamendia',
    title: 'Node Server',
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Ariel Arzamendia',
    title: 'Node Server',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Ariel Arzamendia',
    title: 'Node Server',
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
