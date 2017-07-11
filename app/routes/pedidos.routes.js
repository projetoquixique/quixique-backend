var controller = require('../controllers/pedidos.controller.js');

module.exports = function(app){
    app.post("/api/pedidos", controller.inserirPedido);
    app.get("/api/pedidos/:aid", controller.getPedidosArtesao);
    app.put("/api/pedidos/aceitar/:id", controller.confirmarPedido);
    app.put("/api/pedidos/recusar/:id", controller.recusarPedido);
    
    app.get("/api/pedidos/confirmados/:aid", controller.getPedidosConfirmados);
    app.get("/api/pedidos/recusados/:aid", controller.getPedidosRecusados);
    app.get("/api/pedidos/todos/:aid", controller.getTodosPedidosArtesao);

    app.delete("/api/pedidos/deletar/:id", controller.deletarPedido);
}