var bcrypt = require('bcrypt');
var mailer = require('../../config/nodemailer.js');

var Artesao = require('../models/artesao.model.js');
var Cliente = require('../models/cliente.model.js');
var Produto = require('../models/produtos.model.js');

module.exports.inserirCliente = function(req,res){
    let cliente = new Cliente({
        nome: req.body.nome,
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
                    nome: artesao.nome,
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

module.exports.obterProdutosLojaArtesao = function(req, res){
    let promise = Produto.find({owner: req.params.username});
    // .skip(20)
    // .limit(10)
    promise.then(
        function(produtos) {
            res.status(200).json(produtos);
        },
        function(erro){
            res.status(500).json(erro);
        }
    )
}