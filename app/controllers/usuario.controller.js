var bcrypt = require('bcrypt');
var mailer = require('../../config/nodemailer.js');
var multer = require('multer');

var Artesao = require('../models/artesao.model.js');
var Cliente = require('../models/cliente.model.js');
var Produto = require('../models/produtos.model.js');

module.exports.inserirCliente = function(req,res){
    let cliente = new Cliente({
        nome: req.body.nome,
        nomeApresentacao: req.body.nome.replace(/(([^\s]+\s\s*){2})(.*)/,"$1"),
        dataDeNascimento: req.body.dataDeNascimento,
        cpf: req.body.cpf,
        email: req.body.email,
        celular: req.body.celular,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        nomeDeUsuario: req.body.nomeDeUsuario,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });

    let dadosJaCadastrados = [];

    Cliente.findOne({email: cliente.email}, function(err,obj) { 
        if (obj) {
            dadosJaCadastrados.push("email");
        };
        Cliente.findOne({cpf: cliente.cpf}, function(err,obj) { 
            if (obj) {
                dadosJaCadastrados.push("cpf");
            };
            Cliente.findOne({nomeDeUsuario: cliente.nomeDeUsuario}, function(err,obj) { 
                if (obj) {
                    dadosJaCadastrados.push("nomeDeUsuario");
                };
                if (dadosJaCadastrados.length == 0) {
                    let promise = Cliente.create(cliente);
                    promise.then(
                        function(cliente){
                            mailer.sendMail(cliente.email, 'Conta criada', ' Seja bem-vindo ao Quixique! É um prazer ter você conosco.');
                            res.status(201).send({id: cliente._id});
                        },
                        function(erro){
                            console.log(erro);
                            res.status(500).json(erro);
                        }
                    );
                } else {
                    res.status(409).json({error: dadosJaCadastrados});
                }
            });
        });
    });
};

module.exports.inserirArtesao = function(req,res){
    let artesao = new Artesao({
        nome: req.body.nome,
        nomeApresentacao: req.body.nome.replace(/(([^\s]+\s\s*){2})(.*)/,"$1"),
        dataDeNascimento: req.body.dataDeNascimento,
        cpf: req.body.cpf,
        naturalidade: req.body.naturalidade,
        email: req.body.email,
        celular: req.body.celular,
        telefone: req.body.telefone,
        nomeComercial: req.body.nomeComercial,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        numeroCartao: req.body.numeroCartao,
        vencimentoCartao: req.body.vencimentoCartao,
        titularCartao: req.body.titularCartao,
        nomeDeUsuario: req.body.nomeDeUsuario,
        senha: bcrypt.hashSync(req.body.senha, 10),
        linkPaginaWeb: req.body.linkPaginaWeb
    });

    let dadosJaCadastrados = [];

    Artesao.findOne({email: artesao.email}, function(err,obj) { 
        if (obj) {
            dadosJaCadastrados.push("email");
        };
        Artesao.findOne({cpf: artesao.cpf}, function(err,obj) { 
            if (obj) {
                dadosJaCadastrados.push("cpf");
            };
            Artesao.findOne({nomeDeUsuario: artesao.nomeDeUsuario}, function(err,obj) { 
                if (obj) {
                    dadosJaCadastrados.push("nomeDeUsuario");
                };
                if (dadosJaCadastrados.length == 0) {
                    let promise = Artesao.create(artesao);
                    promise.then(
                        function(artesao){
                            mailer.sendMail(artesao.email, 'Conta criada', ' Seja bem-vindo ao Quixique! É um prazer ter você conosco.');
                            res.status(201).send({id: artesao._id});
                        },
                        function(erro){
                            console.log(erro);
                            res.status(500).json(erro);
                        }
                    );
                } else {
                    res.status(409).json({error: dadosJaCadastrados});
                }
            });
        });
    });
};

module.exports.obterPerfilArtesao = function(req, res){
    let promise = Artesao.findOne({nomeDeUsuario:req.params.username});
    promise.then(
        function(artesao){
            if (artesao && artesao.tipo == 'artesao') {
                res.status(200).json({
                    fotoPerfil: artesao.fotoPerfil,
                    nomeApresentacao: artesao.nomeApresentacao,
                    localizacao: artesao.cidade + ", " + artesao.estado,
                    bio: artesao.bio,
                    apresentacao: artesao.apresentacao,
                    historia: artesao.historia,
                    telefone: artesao.telefone,
                    celular: artesao.celular,
                    email: artesao.email,
                    urlFacebook: artesao.urlFacebook,
                    urlInstagram: artesao.urlInstagram
                });
            } else {
                res.status(404).send("Not found.")
            }
        },
        function(erro){
            res.status(500).json(erro);
        }
    );
};

module.exports.obterBioArtesao = function(req, res){
    let promise = Artesao.findOne({_id:req.params.aid});
    promise.then(
        function(artesao){
            historiaCurta = artesao.historia.substring(0,120) + '...';
            res.status(200).json({
                historia: historiaCurta,
                nomeDeUsuario: artesao.nomeDeUsuario
            });
        }
    );
}

module.exports.atualizarPerfilArtesao = function(req, res){
    let infoAtualizada = {
        nomeApresentacao: req.body.nomeApresentacao,
        fotoPerfil: fotoPerfilNome,
        localizacao: req.body.localizacao,
        bio: req.body.bio,
        apresentacao: req.body.apresentacao,
        historia: req.body.historia,
        telefone: req.body.telefone,
        email: req.body.email,
        urlFacebook: req.body.urlFacebook,
        urlInstagram: req.body.urlInstagram
    }
    Artesao.findOneAndUpdate({nomeDeUsuario: req.params.username}, infoAtualizada, { upsert: true }, function (err, artesao) {
        if (artesao){
            console.log(artesao);
            fotoPerfilNome = "";
            res.status(200).send("Ok");
        }
        if (err){
            console.log(err);
            res.status(500).send(err);
        }
    });
};

module.exports.obterProdutosLojaArtesao = function(req, res){
    let promise = Produto.find({owner: req.params.username});
    // .skip(20)
    // .limit(10)
    promise.then(
        function(produtos){
            res.status(200).json(produtos);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
};

// module.exports.obterProdutosPerfilArtesao = function(req, res){
//     let promise = Produto.find({aid:req.params.aid});
//     res.stat
//     // promise.then(
//     //     function(produtos){
//     //         res.status(200).json(produtos);
//     //     },
//     //     function(erro){
//     //         res.status(500).json(erro);
//     //     }

//     // )
// }

var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            // cb(null, '../quixique/src/assets/uploads/imagens-produtos');
            // cb(null, './uploads/');
            cb(null, './assets/imagens-perfis');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

 var upload = multer({ storage:storage }).single('file');

let fotoPerfilNome;

module.exports.uploadFotoPerfil = function(req, res){
    upload(req,res,function(err){
			console.log(req.file);
      fotoPerfilNome = req.file.filename;
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            // inserirProduto(req, res);
            // next();
             res.json({error_code:0,err_desc:null});
    });
}

module.exports.obterPerfilCliente = function(req, res){
    console.log(req.params.id);
    let promise = Cliente.findById(req.params.id).exec();
    promise.then(
        function(cliente){
            res.status(200).json(cliente);
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

module.exports.editarPerfilCliente = function(req, res){
    console.log(req.params.id);  
    let cliente = {
        nome: req.body.nome,
        nomeApresentacao: req.body.nome.replace(/(([^\s]+\s\s*){2})(.*)/,"$1"),
        dataDeNascimento: req.body.dataDeNascimento,
        cpf: req.body.cpf,
        email: req.body.email,
        celular: req.body.celular,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        nomeDeUsuario: req.body.nomeDeUsuario,
        senha: bcrypt.hashSync(req.body.senha, 10)
    };

    let promise = Cliente.findOneAndUpdate({'_id':req.params.id}, cliente).exec();
    // let promise = Cliente.findByIdAndUpdate(req.params.id, cliente).exec();
    // let promise = Cliente.update(Cliente.find({'_id':req.params.id}), cliente).exec();
    promise.then(
        function(clienteEditado){
            res.status(200).json(clienteEditado)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )

}