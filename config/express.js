var express = require('express');
var usuarioRoutes = require('../app/routes/usuario.routes.js');
var produtosRoutes = require('../app/routes/produtos.routes.js');
var pedidosRoutes = require('../app/routes/pedidos.routes.js');
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
    // var upload = multer({ //multer settings
    //                 storage: storage
    //             }).single('file');

    // app.use(cors());

    var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
	};
    app.use(cors({ origin: true, credentials: true }))
    app.options(cors({ origin: true, credentials: true }))

    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(express.static('./assets'));
    app.use(express.static('./public'));
    // app.use(express.static('../public/assets/imagens-produtos/'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    usuarioRoutes(app);
    produtosRoutes(app);
    pedidosRoutes(app);
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });
    return app;

}