var app = require('./config/server');

var rotasNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
    console.log("Servidor ON");
});