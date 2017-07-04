var controllerCliente = require("../controllers/cliente.controller.js");
var controllerArtesao = require("../controllers/artesao.controller.js");
var controllerAuth = require("../controlers/auth.js");
module.exports = function(app){
    app.post('/api/clientes', controllerCliente.inserirCliente);
    app.post('/api/artesaos', controllerArtesao.inserirArtesao);
    app.post('/api/entrar'), controllerAuth.logar);
}