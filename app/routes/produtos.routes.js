var controller = require('../controllers/produtos.controller.js');
// var cors = require('cors');

module.exports = function(app){
    // app.use(cors());
    app.get("/api/produtos", controller.listarProdutos);
    app.post("/api/produtos/upload", controller.uploadProduto);
    app.post("/api/produtos", controller.inserirProduto);
    
}
