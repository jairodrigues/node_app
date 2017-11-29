var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo:' +body);
    });
});

var produto = {
    titulo : 'mais sobre o node',
    descricao : 'node, javascript e um pouco de http',
    preco : 29.50
}

client.end(JSON.stringify(produto));