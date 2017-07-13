var Comentario = require('../models/comentario.model.js');

module.exports.inserirComentario = function(req, res){
    // console.log(req.body);
    var comentario = new Comentario({
        cid:req.body.cid,
        pid:req.body.pid,
        comentario:req.body.comentario
    });
    let promise = Comentario.create(comentario);
    promise.then(
        function(comentario){
            res.status(201).json(comentario)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.pegarComentario = function(req, res){
    console.log("id do produto "+req.params.id);
    let promise = Comentario.find({'pid':req.params.id}).populate('pid').populate('cid').exec();
    promise.then(
        function(comentario){
            console.log(comentario);
            res.status(200).json(comentario)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}