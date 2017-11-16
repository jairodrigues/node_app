module.exports = function(app){
    app.get('/produtos',function(req,res){
        var mysql = require('mysql');
        var connection = app.infra.connectionFactory();
        connection.query('SELECT * FROM livros', function(err, results){
            res.render('produtos/lista',{lista:results});
        });
        connection.end();
    });

}
  