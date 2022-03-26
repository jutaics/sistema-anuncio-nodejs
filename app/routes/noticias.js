var dbConnection = require('../../config/dbConnection');
const res = require('express/lib/response');

module.exports = function(app){

    var connection = dbConnection();
    app.get('/noticias', function(req, res){     
   
        connection.query('select * from noticias', function(erro, result){
            //res.send(result);
            res.render('noticias/noticias', {noticias : result});
        });    
    }); 
};