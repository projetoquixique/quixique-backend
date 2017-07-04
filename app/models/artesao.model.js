var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    id: {
      type: String,
      required: false
    },
    nome: {
      type: String,
      required: true
    },
    dataDeNascimento: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    naturalidade: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    celular: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: false
    },
    nomeComercial: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    complemento: {
      type: String,
      required: false
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    },
    numeroCartao: {
      type: String,
      required: false
    },
    vencimentoCartao: {
      type: String,
      required: false
    },
    titularCartao: {
      type: String,
      required: false
    },
    nomeDeUsuario: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    },
    linkPaginaWeb: {
      type: String,
      required: false
    }
  });
  return mongoose.model('Artesao', schema);
}();