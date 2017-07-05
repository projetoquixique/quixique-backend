var controller = require('../controllers/produtos.controller.js');
// var cors = require('cors');

module.exports = function(app){
    // app.use(cors());
    app.get("/api/produto/:id", controller.obterProduto);
    app.get("/api/produtos", controller.listarProdutos);
    app.get("/api/produtos/busca", controller.buscarProdutosPorNome);
    app.get("/api/produtos/categoria/:categoria", controller.listarProdutosPorCategoria);

    //IMPLEMENTAR CHECAGEM DE TOKEN
    app.post("/api/produtos/upload", controller.uploadProduto);
    app.post("/api/produtos", controller.inserirProduto);
}
