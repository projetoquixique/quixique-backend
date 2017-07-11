var Pedido = require('../models/pedidos.model.js');
var Produto = require('../models/produtos.model.js');
var Artesao = require('../models/artesao.model.js');

module.exports.inserirPedido = function(req, res){
    let now = new Date;
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let pedido = new Pedido({
        cid:req.body.cid,
        aid:req.body.aid,
        pid:req.body.pid,
        qtd:req.body.qtd,
        valor:req.body.valor,
        destino:req.body.destino,
        status:'aguardando',
        data: day + " - " + month + " - " + year,
    })
    let promise = Pedido.create(pedido);
    promise.then(
        function(pedido){
            res.status(201).json(pedido);
        },
        function(erro){
            res.status(500).json(erro)
        }
    );
}

module.exports.getPedidosArtesao = function(req, res){
    let produto = Pedido.find({aid:req.params.aid, status:'aguardando'}).populate('aid').populate('cid').populate('pid').exec();
    produto.then(
        function(pedido){
            console.log(pedido);
            res.status(200).json(pedido);
        },
        function(erro){
            console.log(erro);
        }
    )
}

module.exports.confirmarPedido = function(req, res){
    console.log(req.params.id);
    // let pedido = Pedido.find({_id:req.params.id}).exec();
    let pedido = Pedido.findByIdAndUpdate(req.params.id, {'status':'confirmado'}).exec();
    pedido.then(
        function(pedido){
            encontrarProduto(pedido);
            console.log(pedido);
            res.status(200).json(pedido);
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}
function encontrarProduto(pedido){
    let promise = Produto.findById(pedido.pid).exec();
    promise.then(
        function(produto){
            decrementarEstoque(pedido, produto);
            res.status(200).json(produto);
        },
        function(erro){
            res.status(500).json(erro)
        }
    )   
}
function decrementarEstoque(pedido, produto){
    let estoque = produto.estoque;
    let estoqueDecrementado = produto.estoque - pedido.qtd;
    let promise = Produto.findByIdAndUpdate(produto._id,{'estoque':estoqueDecrementado}).exec();
    promise.then(
        function(produto){
            res.status(200).json(produto);
        },
        function(erro){
            res.status(500).json(erro)
        }
    )   
}

module.exports.recusarPedido = function(req, res){
    console.log(req.params.id);
    let pedido = Pedido.findByIdAndUpdate(req.params.id, {'status':'recusado'}).exec();
    pedido.then(
        function(pedido){
            res.status(200).json(pedido)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.getPedidosConfirmados = function(req, res){
    let criterio = {$and: [{'status':'confirmado'},{aid:req.params.aid}]};
    let pedido = Pedido.find(criterio).populate('cid').populate('pid').exec();
    pedido.then(
        function(pedido){
            res.status(200).json(pedido)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.getPedidosRecusados = function(req, res){
    let criterio = {$and: [{'status':'recusado'},{aid:req.params.aid}]};
    let pedido = Pedido.find(criterio).populate('cid').populate('pid').exec();
    pedido.then(
        function(pedido){
            res.status(200).json(pedido)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.getTodosPedidosArtesao = function(req, res){
    let criterio = {$and: [{aid:req.params.aid}]};
    let pedido = Pedido.find(criterio).populate('cid').populate('pid').exec();
    pedido.then(
        function(pedido){
            res.status(200).json(pedido)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.deletarPedido = function(req, res){
    let promise = Pedido.findByIdAndRemove(req.params.id).exec();
    promise.then(
        function(pedido){
            res.status(200).json(pedido)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}