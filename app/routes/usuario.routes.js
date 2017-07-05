var controllerUsuario = require("../controllers/usuario.controller.js");
var controllerAuth = require("../controllers/auth.js");

module.exports = function(app){
    app.post('/api/clientes', controllerUsuario.inserirCliente);
    app.post('/api/artesaos', controllerUsuario.inserirArtesao);
    app.post('/api/entrar', controllerAuth.logar);
    app.get('/api/artesao/:username', controllerUsuario.obterPerfilArtesao);
    app.get('/api/artesao/:username/loja', controllerUsuario.obterProdutosLojaArtesao);
}