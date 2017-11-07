//Express é uma lib em js para lidar com requisições HTTP
var express = require('express');

//guarda um objeto com as funcionalidades da biblioteca Express
var app = express();

//define a biblioteca responseval pelas view, no caso a EJS (Lib de modelos MVC para projetos JS)
app.set('view engine','ejs');

//pega a rota e atraves do método send envia como response a pagina
app.get('/produtos',function(req,res){
    console.log("Atendendo a requisição")
    res.render("produtos/lista")
});

//abre um servidor atraves da porta 3000 com uma mensagem
app.listen(3000, function(){
    console.log("Servidor rodando");
});