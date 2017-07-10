var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    id: {
      type: String,
      required: false
    },
    tipo: {
      type: String,
      default: "artesao",
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    nomeApresentacao: {
      type: String,
      required: false
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
    },
    bio: {
      type: String,
      required: false
    },
    apresentacao: {
      type: String,
      required: false
    },
    historia: {
      type: String,
      required: false
    },
    urlFacebook: {
      type: String,
      required: false
    },
    urlInstagram: {
      type: String,
      required: false
    }
  });
  return mongoose.model('Artesao', schema, 'usuarios');
}();