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
    email: {
      type: String,
      required: true
    },
    celular: {
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
    nomeDeUsuario: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    }
  });
  return mongoose.model('Cliente', schema);
}();