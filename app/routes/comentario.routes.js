var multer = require('multer');

var controller = require('../controllers/comentario.controller.js');

module.exports = function(app){
    app.get("/api/comentarios/:id", controller.pegarComentario);
    app.post("/api/comentarios", controller.inserirComentario);

}
