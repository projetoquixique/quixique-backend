var bcrypt = require('bcrypt');
var Usuario = require('../models/usuario.model.js');
var jwt = require('jsonwebtoken');

module.exports.logar = function(req, res) {
  function logar(user){
    if (!user) {
      falhar();
    } else {
      if (!bcrypt.compareSync(req.body.senha, user.senha)) {
        falhar();
      } else {
        let token = jwt.sign({id: user._id}, 'segredo');
        userObj = user.toObject();
        res.status(200).json({
          tipo: userObj.tipo,
          nomeApresentacao: userObj.nomeApresentacao,
          nomeDeUsuario: userObj.nomeDeUsuario,
          token: token,
          userId: userObj._id,
          fotoPerfil: userObj.fotoPerfil
        });
      }
    };
  }
  function falhar() {
    res.status(401).json({erro: 'invalid login'});
  };

  Usuario.findOne({email: req.body.email}).exec().then(logar, falhar);
};