const info = require('./data.js');

const http = require('node:http');

const server = http.createServer((req, res)=>{
    console.log('recibido');
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.end(`
        <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${info.title}</title>
                </head>
            <body>
                <h1>${info.titulo}</h1>
                <h4>${info.subtitulo}</h4>
                <p>${info.descripcion}</p>
            </body>
        </html>
    `)
});

server.listen(0, () =>{
    console.log(`server listening on port http://localhost:${server.address().port}`);
});