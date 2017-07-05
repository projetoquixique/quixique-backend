var express = require('express');
var clienteRoutes = require('../app/routes/cliente.routes.js');
var artesaoRoutes = require('../app/routes/artesao.routes.js');
var produtosRoutes = require('../app/routes/produtos.routes.js');
var bodyParser = require('body-parser');
// var multer = require('multer');
const path = require('path');
var cors = require('cors');

module.exports = function(){
    var app = express();

    // app.use(function(req, res, next) { //allow cross origin requests
    // res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    // res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Credentials", true);
    // next();
    // });

    app.use(cors({ origin: true, credentials: true }))
    app.options(cors({ origin: true, credentials: true }))

    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(express.static('./public'));
    app.use(express.static('./assets'));
    // app.use(express.static('../public/assets/imagens-produtos/'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    clienteRoutes(app);
    artesaoRoutes(app);
    produtosRoutes(app);
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });
    return app;

}