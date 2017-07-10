var multer = require('multer');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

var Produto = require('../models/produtos.model.js');

let nomeImagem = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
module.exports.nomeImagemVetor = nomeImagem;     

var produtos = [
    //   {
    //       "imagem":"thumb (1).png",
    //       "nome":"Arara de gesso coloridas",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo.",
    //       "preco":23.00, 
    //       "dimensoes":[1,2,3],
    //       "categoria":"barro",
    //       "estoque":30
    //   },
    //   {
    //       "imagem":"thumb (2).png",
    //       "nome":"Chaveiro personalizado Galinha Choca Quixadá",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis.",
    //       "preco":6.00, 
    //       "dimensoes":[1,2,3],  
    //       "categoria":"barro",                  
    //       "estoque":20,
    //   },
    //   {
    //       "imagem":"thumb (3).png",
    //       "nome":"Porta-ovos Galinha pintadinha para decoração",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo.",
    //       "preco":24.00, 
    //       "dimensoes":[1,2,3],  
    //       "categoria":"barro",
    //       "estoque":13,
    //   },
    //   {
    //       "imagem":"thumb (4).png",
    //       "nome":"Enfeite para parede flor e joaninha",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo.",
    //       "preco":35.00,
    //       "dimensoes":[1,2,3],  
    //       "categoria":"barro",
    //       "estoque":15,
    //   },
    //   {
    //       "imagem":"thumb (5).png",
    //       "nome":"Boneco de palha e cabaça",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo.",
    //       "preco":25.00,
    //       "dimensoes":[1,2,3],  
    //       "categoria":"barro",
    //       "estoque":5,
    //   },
    //   {
    //       "imagem":"thumb (6).png",
    //       "nome":"Casinha de barro para decoração",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo.",
    //       "preco":16.00, 
    //       "dimensoes":[1,2,3],  
    //       "categoria":"barro",
    //       "estoque":7,
    //   }
];

module.exports.listarProdutos = function(req, res){
    // res.json(produtos);
    let promise = Produto.find().exec();
    promise.then(
        function(produto){
        res.json(produto)
        },
        function(erro){
        res.status(500).end();
        }
    );
};

module.exports.removerProduto = function(req, res){
    let promise = Produto.findByIdAndRemove(req.params.id);
    promise.then(
        function(produto){
        res.status(200).json(produto);
        },
        function(erro){
        res.status(500).json(erro);
        }
    )
}

module.exports.inserirProduto = function(req, res){
  let produto = new Produto({
    aid: req.body.artesao_id,
    imagem: nomeImagem,
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    dimensoes: req.body.dimensoes,
    categoria: req.body.categoria,
    estoque: req.body.estoque,
  });
  console.log("produto");
  let promise = Produto.create(produto);
  promise.then(
    function(produto){
      res.status(201).json(produto);
      nomeImagem = [];
      console.log(nomeImagem);
    },
    function(erro){
      res.status(500).json(erro)
    }
  );

//   let promise2 = Produto.find().exec();
//     promise2.then(
//         function(produto2){
//         res.json(produto2)
//         },
//         function(erro){
//         res.status(500).end();
//         }
//     );
    
};

var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            // cb(null, '../quixique/src/assets/uploads/imagens-produtos');
            // cb(null, './uploads/');
            cb(null, './assets/imagens-produtos');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

 var upload = multer({ storage:storage }).single('file');



module.exports.uploadProduto = function(req, res){
    upload(req,res,function(err){
			console.log(req.file);
      nomeImagem.push(req.file.filename);
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            // inserirProduto(req, res);
            // next();
             res.json({error_code:0,err_desc:null});
    });
}

module.exports.obterProduto = function(req, res) {
    let promise = Produto.findOne({_id:req.params.id});
    promise.then(
        function(produto){
            if (produto){
                res.status(200).json({
                    title: produto.nome,
                    price: produto.preco,
                    units: produto.estoque,
                    size: produto.dimensoes,
                    materials: produto.categoria,
                    description: produto.descricao
                })
                //materiais não é o mesmo que categoria (ver página detalhe_produto)
                //obter comentários, bio do autor e link do perfil - INSERIR ID DO ARTESAO E COMENTARIOS
            } else {
                res.status(404).send("Not found");
            }
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
};

module.exports.listarProdutosPorCategoria = function(req, res) {
    let promise = Produto.find({categoria:req.params.categoria});
    promise.then(
        function(produtos){
            res.status(200).json(produtos);
        }, 
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarProdutosPorNome = function(req, res) {
    // Produto.find({$text: {$search: req.query.termo}})
    //         // .skip(20)
    //         // .limit(10)
    //         .exec(function(err, docs){
    //             res.status(200).json(docs);
    //         });
    let promise = Produto.find({$text: {$search: req.query.termo}}).exec();
    promise.then(
        function(produtos){
            res.status(200).json(produtos);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
}


module.exports.editarProduto = function(req, res){
    let produto = new Produto({
        // imagem: this.nomeImagem,
        imagem: nomeImagem,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dimensoes: req.body.dimensoes,
        categoria: req.body.categoria,
        estoque: req.body.estoque,
    });
    let id = req.params.id;


    let promise = Produto.update(Produto.findById(id), req.body);
    promise.then(
        function(produto){
            console.log("entro");
            res.status(200).json(produto);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.getProdutosArtesao = function(req, res){
    let produto = Produto.find({aid:req.params.aid}).exec();
    produto.then(
        function(produto){
            console.log(produto);
            res.status(200).json(produto);
        },
        function(erro){
            console.log(erro);
        }
    )
}