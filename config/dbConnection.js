var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com o db foi estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
        });

}

module.exports = function(){
    console.log('o autoload carregou o módulo de conexão com db');
 return connMySQL;
}