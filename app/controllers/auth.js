var bcrypt = require('bcrypt');
var Usuario = require('../models/usuario.model.js');
var jwt = require('jsonwebtoken');

module.exports.logar = function(req, res) {
  function logar(user){
    if (!bcrypt.compareSync(req.body.senha, user.senha)) {
      falhar();
    } else {
      let token = jwt.sign({id: user._id}, 'segredo');
      userObj = user.toObject();
      res.status(200).json({
        tipo: userObj.tipo,
        nome: userObj.nome,
        nomeDeUsuario: userObj.nomeDeUsuario,
        token: token,
        userId: userObj._id
      });
    }
  };
  function falhar() {
    res.status(401).send({erro: 'login inválido'});
  };

  Usuario.findOne({email: req.body.email}).exec().then(logar, falhar);
};