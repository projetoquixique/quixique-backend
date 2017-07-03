var bcrypt = require('bcrypt');
var mailer = require('../../config/nodemailer.js');

var Artesao = require('../models/artesao.model.js');

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