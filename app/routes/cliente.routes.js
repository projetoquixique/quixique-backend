var controllerCliente = require("../controllers/cliente.controller.js");
var controllerArtesao = require("../controllers/artesao.controller.js");
module.exports = function(app){
    app.post('/api/usuarios', controllerCliente.inserirCliente);
    app.post('/api/artesaos', controllerArtesao.inserirArtesao);
}