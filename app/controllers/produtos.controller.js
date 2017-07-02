var multer = require('multer');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

var Produto = require('../models/produtos.model.js');

let nomeImagem = [];

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
    res.json(produtos);
};

module.exports.inserirProduto = function(req, res){

    // xhr.open('POST', 'http://localhost:4200/loja_artesao_view', true);
    // xhr.withCredentials = true;
    // xhr.send(null);


    // var storage = multer.diskStorage({ //multers disk storage settings
    //     destination: function (req, file, cb) {
    //         cb(null, './uploads/');
    //     },
    //     filename: function (req, file, cb) {
    //         var datetimestamp = Date.now();
    //         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    //     }
    // });

    // var upload = multer({ //multer settings
    //                 storage: storage
    //             }).single('file');

    
    // upload(req,res,function(err){
	// 		console.log(req.file);
    //         if(err){
    //              res.json({error_code:1,err_desc:err});
    //              return;
    //         }
    //          res.json({error_code:0,err_desc:null});
    // });
    // req.body.imagem.push(nomeImagem);
    // let promise = 
    // req.body.imagem = nomeImagem;
    // console.log(req.body);
    // produtos.push(req.body);
    // nomeImagem = [];
    // res.status(201).send(req.body);
    // res.sendStatus(201);
    let produto = new Produto({
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    dimensoes: req.body.dimensoes,
    categoria: req.body.categoria,
    estoque: req.body.estoque,
  });
  let promise = Produto.create(produto);
  promise.then(
    function(produto){
      res.status(201).json(produto);
    },
    function(erro){
      res.status(500).json(erro)
    }
  );
    
};

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, '../quixique/src/assets/uploads/imagens-produtos');
            // cb(null, '../../../quixique/');
            // cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

// var upload = multer({ //multer settings
//                 storage: storage
//             }).single('file');
 var upload = multer({ storage:storage }).single('file');



module.exports.uploadProduto = function(req, res){
    // req.body.imagem = storage.filename;
    // produtos.push(req.body);
    upload(req,res,function(err){
        // console.log(req.body);
        console.log(req.file.filename);
        console.log(req.file);
        nomeImagem.push(req.file.filename);
        console.log(nomeImagem);
        // console.log(req.body.imagem);
        // console.log(req.body.nome);
        // console.log(req.body);
        // req.body.imagem.push(req.file.filename);
        // console.log(req.body.imagem);
        // if(err){
        //     res.json({error_code:1,err_desc:err});
        //     return;
        // }
        // res.json({error_code:0,err_desc:null});
        // res.status(201).send(req.body);
    });
    // console.log("requisição:" + req.body);
}

