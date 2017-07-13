var multer = require('multer');

var controller = require('../controllers/produtos.controller.js');
// var cors = require('cors');

var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            cb(null, '../quixique/src/assets/uploads/imagens-produtos');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

 var upload = multer({ storage:storage }).single('file');


module.exports = function(app){
    // app.use(cors());
    app.get("/api/produto/:id", controller.obterProduto);
    app.get("/api/produtos", controller.listarProdutos);
    app.get("/api/produtos/busca", controller.buscarProdutosPorNome);
    app.get("/api/produtos/categoria", controller.listarProdutosPorCategoria);
    app.get("/api/produtos/:aid", controller.getProdutosArtesao);
    app.get("/api/:aid/recomendacoes", controller.obterRecomendacoesProdutoArtesao);
    app.get("/api/produtos/:categoria/recomendacoes", controller.obterRecomendacoesCategoria);

    //IMPLEMENTAR CHECAGEM DE TOKEN
    app.delete("/api/produtos/:id", controller.removerProduto);
    // app.post("/api/produtos/upload", controller.uploadProduto);
    app.post("/api/produtos/upload", controller.uploadProduto);
    app.post("/api/produtos", controller.inserirProduto);
    app.put("/api/produtos/:id", controller.editarProduto);
    app.delete("/api/produtos/:id", controller.deletarProduto);
}
