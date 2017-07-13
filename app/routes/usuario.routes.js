var controllerUsuario = require("../controllers/usuario.controller.js");
var controllerAuth = require("../controllers/auth.js");

module.exports = function(app){
    app.post('/api/clientes', controllerUsuario.inserirCliente);
    app.post('/api/artesaos', controllerUsuario.inserirArtesao);
    app.post('/api/entrar', controllerAuth.logar);
    app.post('/api/perfil/upload', controllerUsuario.uploadFotoPerfil);
    app.get('/api/artesao/:aid/bio', controllerUsuario.obterBioArtesao);
    app.get('/api/clientes/:id', controllerUsuario.obterPerfilCliente);
    app.put('/api/clientes/:id', controllerUsuario.editarPerfilCliente);
    app.get('/api/artesao/:username', controllerUsuario.obterPerfilArtesao);
    app.get('/api/artesao/:username/loja', controllerUsuario.obterProdutosLojaArtesao);
    app.put('/api/artesao/:username/atualizarperfil', controllerUsuario.atualizarPerfilArtesao);
}