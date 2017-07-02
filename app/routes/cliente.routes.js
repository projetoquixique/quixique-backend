var controller = require("../controllers/cliente.controller.js");
module.exports = function(app){
    app.get('/api/clientes', controller.listarClientes);
    app.get('/api/clientes/:id', controller.obterCliente);
    app.post('/api/clientes', controller.inserirCliente);
    // app.put();
    // app.delete();
}