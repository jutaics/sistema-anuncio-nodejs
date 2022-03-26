var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body>Notíocias de Tecnologia</body></html>");
    }
    else if (categoria == '/moda') {
        res.end("<html><body>Notíocias de Moda</body></html>");
    }
    else if (categoria == '/beleza') {
        res.end("<html><body>Notíocias de Beleza</body></html>");
    }
    else {
        res.end("<html><body>Portal de Notícias </body></html>");
    }
});

server.listen(3000);