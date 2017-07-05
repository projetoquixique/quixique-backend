var multer = require('multer');

var controller = require('../controllers/produtos.controller.js');
// var cors = require('cors');

var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            cb(null, '../quixique/src/assets/uploads/imagens-produtos');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

 var upload = multer({ storage:storage }).single('file');


module.exports = function(app){
    // app.use(cors());
    app.get("/api/produtos", controller.listarProdutos);
    app.delete("/api/produtos/:id", controller.removerProduto);
    // app.post("/api/produtos/upload", controller.uploadProduto);
    app.post("/api/produtos/upload", controller.uploadProduto);
    // app.use("/api/produtos/insert", function(){
    //     upload(req,res,function(err){
    //         // console.log(req.file.filename);
    //         console.log(req.body);
    //         console.log(controller.nomeImagemVetor);
    //         res.json({error_code:0,err_desc:null});
    //         // controller.nomeImagemVetor.push(req.file.filename);
    //     });
    //     next()
    // });
    app.post("/api/produtos", controller.inserirProduto);
    
}
