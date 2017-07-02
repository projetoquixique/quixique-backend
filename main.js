var http = require('http');
var app = require('./config/express')();
var db = require('./config/database.js');

http.createServer(app).listen(app.get('port'), 
function(){
    console.log('Estou rodando!\n' + app.get('port'));
});
db('mongodb://localhost/quixiquedb');