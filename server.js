const http = require('http');

const dadosPessoais = {
    "nome": "Victor Henrique Estrella Carracci",
    "idade": 18,
    "descrição": "Sou uma pessoa introvertida, gosto de jogar e passar um tempo com a família e com amigos.",
    "gênero": "Masculino",
    "país": "Brasil"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(dadosPessoais))
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
  });