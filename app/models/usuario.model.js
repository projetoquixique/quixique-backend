var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    id: {
      type: String
    },
    tipo: {
      type: String
    },
    email: {
      type: String
    },
    senha: {
      type: String
    }
  });
  return mongoose.model('Usuario', schema, 'usuarios');
}();