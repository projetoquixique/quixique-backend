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


    // var storage = multer.diskStorage({ //multers disk storage settings
    //     destination: function (req, file, cb) {
    //         cb(null, './uploads/');
    //     },
    //     filename: function (req, file, cb) {
    //         var datetimestamp = Date.now();
    //         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    //     }
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
      res.send(200);
    }
    else {
      next();
    }
	};

    app.use(allowCrossDomain);

    // app.use(cors({ origin: true, credentials: true }))
    // app.options(cors({ origin: true, credentials: true }))

    // app.all("*", function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Credentials", true);
    //     res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    //     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    //     return next();
    // });
    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(express.static('../public/'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    clienteRoutes(app);
    artesaoRoutes(app);
    produtosRoutes(app);
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, '../public/'));
    });
    return app;

}