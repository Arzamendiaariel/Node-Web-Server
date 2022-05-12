const http = require('http');

http
  .createServer((request, response) => {
    console.log(request);
    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('Hola Mundo');
    // response.write('id, nombre\n');
    // response.write('1, Fernando\n');
    // response.write('2, Maria\n');
    // response.write('3, Juan\n ');
    // response.write('4, Pedro\n');
    response.end();
  })
  .listen(8080);

console.log('escuchando en puerto 8080');
