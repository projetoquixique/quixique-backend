var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		imagem:{
			type: [String],
			required: false
		},
		nome: {
			type: String,
			required: true
		},
		descricao: {
			type: String,
			required: true
		},
        preco: {
			type: Number,
			required: true
		},
        dimensoes: {
			type: [Number],
			required: true
		},
        categoria: {
			type: String,
			required: true
		},
        estoque: {
			type: Number,
			required: true
		}
	});
	return mongoose.model('Produto', schema);
}();