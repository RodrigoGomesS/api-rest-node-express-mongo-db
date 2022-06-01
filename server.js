const http = require('http');
const port = 3000;

const rotas = {
    '/' : 'Curso Node',
    '/livros' : 'Entrei na página de livros',
    '/autores' : 'Listagem de autores',
    '/editora': 'Página de editora',
    '/sobre' : 'Informações sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Serviidor escutando em http://localhost:${port}`)
});
